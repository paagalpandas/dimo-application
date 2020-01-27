package org.pagalpandas.service;

import com.auth0.jwt.JWT;
import org.pagalpandas.dto.UserCredentials;
import org.pagalpandas.entity.User;
import org.pagalpandas.repository.UserRepository;
import org.pagalpandas.utils.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static org.pagalpandas.utils.Constants.EXPIRATION_TIME;
import static org.pagalpandas.utils.Constants.SECRET;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public String login(UserCredentials creds) throws UnauthorizedException {
        User user = this.repository.get(creds.email);

        if (user.password.equalsIgnoreCase(creds.password)) {
            return generateToken(creds.email);
        }
        throw new UnauthorizedException();
    }

    private String generateToken(String email) {

        // TODO: Add roles to the claims.
        String token = JWT.create()
                .withSubject(email)
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(HMAC512(SECRET.getBytes()));
        return token;
    }
}
