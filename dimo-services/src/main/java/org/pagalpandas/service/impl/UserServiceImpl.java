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


    @Override
    public String register(UserDTO userDTO) throws Exception {
        User userEntity= new User();
        if(checkExistingUser(userDTO.getEmail())){
            throw new UserAlreadyExistsException("User Already Exists");
        }
        userEntity.setFirstName(userDTO.getFirstName());
        userEntity.setLastName(userDTO.getLastName());
        userEntity.setPassword(generateHashPassword(userDTO.getPassword()));
        userEntity.setEmail(userDTO.getEmail());
        return this.userRepository.save(userEntity).getId().toString();
    }

    private boolean checkExistingUser(String emailId){
       User user= userRepository.findByEmail(emailId);
       return user!=null;
    }


    private String generateHashPassword(String password)throws Exception{


            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(SECRET_KEY.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(password.getBytes()));
            return hash;

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
