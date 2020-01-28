package org.pagalpandas.service.impl;

import com.auth0.jwt.JWT;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.entity.Profile;
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
    UserRepository repository;

    public LoginResponseDTO login(CredentialsDTO creds) throws UnauthorizedException {
        // TODO: Perform basic validations

        // Check matching credentials.
        boolean isMatch = this.repository.matchCredentials(creds.email, creds.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        Profile profile = this.repository.getProfile(creds.email);
        String token = generateToken(profile);
        LoginResponseDTO response = new LoginResponseDTO();
        response.setToken(token);
        return response;
    }

    private String generateToken(Profile profile) {
        final String authorities = profile.roles.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        String token = JWT.create()
                .withClaim("FirstName", profile.getFirstName())
                .withClaim("LastName", profile.getLastName())
                .withSubject(profile.getEmail())
                .withClaim(AUTHORITIES, authorities)
                .withIssuer(ISSUER)
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(SECRET.getBytes()));

        return token;
    }
}
