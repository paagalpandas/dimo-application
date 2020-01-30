package org.pagalpandas.repo;

import org.junit.jupiter.api.Test;
import org.pagalpandas.entity.User;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.security.HashUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;


@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    public void testDBLoginSuccess() throws UnauthorizedException {


        User user = userRepository.getUserByEmailAndPassword("sanket@gmail.com", HashUtility.generateHash("Welcome@01"));


        assertNotEquals(null,user);
        assertEquals("sanket@gmail.com",user.getEmail());

    }

    @Test
    public void testDBLoginFailureWithWrongPassword() throws UnauthorizedException {


        User user = userRepository.getUserByEmailAndPassword("sanket@gmail.com", HashUtility.generateHash("12Welcome@01"));


        assertEquals(null,user);

    }

    @Test
    public void testDBLoginFailureWithWrongEmail() throws UnauthorizedException {


        User user = userRepository.getUserByEmailAndPassword("sanket343@gmail.com", HashUtility.generateHash("Welcome@01"));


        assertEquals(null,user);

    }

    @Test
    public void testDBLoginFailureWithUnHashedPassword() throws UnauthorizedException {


        User user = userRepository.getUserByEmailAndPassword("sanket343@gmail.com","Welcome@01");


        assertEquals(null,user);

    }

}
