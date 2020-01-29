package org.pagalpandas.controller;

import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.dto.UserDTO;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("login")
    public LoginResponseDTO login(@RequestBody CredentialsDTO creds) throws UnauthorizedException {
        return this.service.login(creds);
    }

    @PostMapping("register")
    public long register(@RequestBody UserDTO userDTO) throws UserAlreadyExistsException {
        return this.service.register(userDTO);

    }

}