package org.pagalpandas.service.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.dto.UserDTO;
import org.pagalpandas.entity.Role;
import org.pagalpandas.entity.User;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.repo.UserRepository;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.pagalpandas.utils.Constants.AUTHORITIES;
import static org.pagalpandas.utils.Constants.SECRET;

class UserServiceImplTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserServiceImpl service;

    ObjectId objectId;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void loginSuccessful() throws UnauthorizedException {


        User dbUser = new User();
        dbUser.setEmail("foo@bar.com");
        dbUser.setPassword("hashedpassword");

        dbUser.setFirstName("Foo");
        dbUser.setLastName("Bar");
        dbUser.setRoles(Arrays.asList(Role.ROLE_ADMIN,Role.ROLE_VIEWER));

        when(userRepository.getUserByEmailAndPassword(any(), any())).thenReturn(dbUser);

        CredentialsDTO dto = new CredentialsDTO("foo@bar.com", "hashedpassword");
        LoginResponseDTO responseDTO = service.login(dto);

        assertNotNull(responseDTO);

        String token = responseDTO.getToken();

        Claims claims = parseToken(token);

        assertEquals("foo@bar.com", claims.getSubject());
        assertEquals("Foo", claims.get("FirstName"));
        assertEquals("Bar", claims.get("LastName"));
    }

    /*@Test
    public void loginFailed() throws UnauthorizedException {
        when(userRepository.getUserByEmailAndPassword(any(), any())).thenReturn(null);
        CredentialsDTO dto = new CredentialsDTO("foo@bar.com", "passwordHash");
        assertThrows(UnauthorizedException.class, () -> {
            service.login(dto);
        });
    }*/

    private Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET.getBytes())
                .parseClaimsJws(token).getBody();
    }

    /*@Test
    public void registerSuccess(){
        when(repository.)
    }*/

    /*@Test
    public void hashPassword(){
        assertEquals("3PFIMprNmwlw7uSNAUW1fpdWOmZ0yFAs3P+uf09Oj4k=",service.generateHashPassword("abc"));
        assertEquals("3PFIMprNmwlw7uSNAUW1fpdWOmZ0yFAs3P+uf09Oj4k=",service.generateHashPassword("abc"));
    }*/

    @Test
    public void testNewUser() throws Exception {
        String emailId="nitikathareja@gmail.com";
        when(userRepository.findByEmail(emailId)).thenReturn(null);
        when(userRepository.save(Mockito.any(User.class))).thenReturn(getDummyUser());
        assertEquals(getObjectId().toString(),service.register(getUserDTO()));
       // assertFalse(service.checkExistingUser(emailId));

    }

    //@Test(expected= UserAlreadyExistsException.class)
    @Test
    public void testAlreadyExistingUser(){

        String emailId="nitikathareja@gmail.com";
        when(userRepository.findByEmail(emailId)).thenReturn(getDummyUser());
        when(userRepository.save(Mockito.any(User.class))).thenReturn(getDummyUser());
    }

    private ObjectId getObjectId(){
        if(null==objectId)
            objectId=new ObjectId();

        return objectId;
    }


    private User getDummyUser(){
        User user = new User();
        user.setId(getObjectId());
        user.setEmail("nitikathareja@gmail.com");
        return user;
    }

    private UserDTO getUserDTO(){
        UserDTO userDTO = new UserDTO();
        userDTO.setPassword("StayHappy");
        userDTO.setEmail("nitikathareja@gmail.com");
        return userDTO;
    }
}