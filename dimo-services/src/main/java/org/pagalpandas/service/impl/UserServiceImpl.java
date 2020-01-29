package org.pagalpandas.service.impl;

import com.auth0.jwt.JWT;
import org.apache.tomcat.util.codec.binary.Base64;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.dto.UserDTO;
import org.pagalpandas.entity.User;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.repo.UserRepository;
import org.pagalpandas.service.UserService;
import org.pagalpandas.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
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
        boolean isMatch = this.repository.matchCredentials(creds.email, creds.passwordHash);
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        User user = this.repository.getProfile(creds.email);
        String token = generateToken(user);
        LoginResponseDTO response = new LoginResponseDTO();
        response.setToken(token);
        return response;
    }

    @Override
    public long register(UserDTO userDTO) throws UserAlreadyExistsException {
        User userEntity= new User();
        if(checkExistingUser(userDTO.getEmail())){
            throw new UserAlreadyExistsException("User Already Exists");
        }
        userEntity.setPassword(generateHashPassword(userDTO.getPassword()));
        userEntity.setEmail(userDTO.getEmail());
        return this.repository.save(userEntity).getId();
    }

    public boolean checkExistingUser(String emailId){
       User user= repository.findByEmail(emailId);
       return user!=null;
    }


    public String generateHashPassword(String password){
        try {

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(SECRET_KEY.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(password.getBytes()));
            return hash;
        }
        catch (Exception e){
            System.out.println("Error");
        }
   return null;
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
