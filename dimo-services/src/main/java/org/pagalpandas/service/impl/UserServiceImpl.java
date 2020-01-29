package org.pagalpandas.service.impl;

import com.auth0.jwt.JWT;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.entity.Login;
import org.pagalpandas.entity.Profile;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.repo.LoginRepository;
import org.pagalpandas.repo.ProfileRepository;
import org.pagalpandas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static org.pagalpandas.utils.Constants.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    ProfileRepository profileRepo;

    @Autowired
    LoginRepository loginRepo;

    public LoginResponseDTO login(CredentialsDTO credentials) throws UnauthorizedException {

        // fetch user profile from DB with the provided email an password
        // check if there is any user exist or not.
        // if yes return valid token.
        // if not throw some sort of error.


        if(credentials == null ) throw new IllegalArgumentException();

        Optional<Login> repoResponse = this.loginRepo.findById(credentials.email);

        if (repoResponse.isEmpty()) {
            throw new UnauthorizedException();
        }

        Login repoUser = repoResponse.get();

        if (!this.matchCredentials(credentials.passwordHash, repoUser.getPassword())) {
            throw new UnauthorizedException();
        }

        Profile userProfile = this.profileRepo.findByEmail(credentials.email);
        String token = generateToken(userProfile);
        LoginResponseDTO response = new LoginResponseDTO();
        response.setToken(token);

        return response;


    }


    private boolean matchCredentials(String inputHashPwd, String persistedHashPwd) {
        return inputHashPwd.equalsIgnoreCase(persistedHashPwd);
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
