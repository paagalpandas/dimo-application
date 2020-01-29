package org.pagalpandas.service.impl;

import com.auth0.jwt.JWT;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.entity.User;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.repo.UserRepository;
import org.pagalpandas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.stream.Collectors;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static org.pagalpandas.utils.Constants.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    public LoginResponseDTO login(CredentialsDTO creds) throws UnauthorizedException {

        if(creds == null || creds.email == null || creds.passwordHash == null) throw new IllegalArgumentException();

        User dbUser = userRepository.getUserByEmailAndPassword(creds.email,creds.passwordHash);

        if(dbUser == null) throw new UnauthorizedException();

        String token = generateToken(dbUser);

        LoginResponseDTO response = new LoginResponseDTO();

        response.setToken(token);

        return response;
    }

    private String generateToken(User user) {
        final String authorities = user.roles.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        String token = JWT.create()
                .withClaim("FirstName", user.getFirstName())
                .withClaim("LastName", user.getLastName())
                .withSubject(user.getEmail())
                .withClaim(AUTHORITIES, authorities)
                .withIssuer(ISSUER)
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(SECRET.getBytes()));

        return token;
    }
}
