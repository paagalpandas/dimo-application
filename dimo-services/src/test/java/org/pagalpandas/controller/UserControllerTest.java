package org.pagalpandas.controller;


import org.hamcrest.Matchers;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.service.UserService;
import org.pagalpandas.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

//    @InjectMocks
//    private UserController userController;
//
//    @Mock
//    private UserServiceImpl userService;


    @Autowired
    private UserController userController;

    @Autowired
    private MockMvc mockMvc;

    /*@Test
    public void testUserController() {

        this.mockMvc.perform(get("/api/users")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().

    }*/

    @Test
    public void testRegister(){
        //when(userService.register()
    }

    @Test
    public void testLoginSuccess() throws UnauthorizedException {
        CredentialsDTO cdo = new CredentialsDTO("sanket@gmail.com", "Welcome@01");
        LoginResponseDTO responseDTO = userController.login(cdo);
        assertNotEquals(null, responseDTO);
        assertNotEquals(null, responseDTO.getToken());
    }

    @Test
    public void testLoginFailureWithWrongPassword() throws UnauthorizedException {
        CredentialsDTO cdo = new CredentialsDTO("sanket@gmail.com", "elcome@01");
        Assertions.assertThrows(UnauthorizedException.class, () -> {
            userController.login(cdo);
        });

    }
    @Test
    public void testLoginFailureWithWrongName() throws UnauthorizedException {
        CredentialsDTO cdo = new CredentialsDTO("sanke@gmail.com", "Welcome@01");
        Assertions.assertThrows(UnauthorizedException.class, () -> {
            userController.login(cdo);
        });

    }



}
