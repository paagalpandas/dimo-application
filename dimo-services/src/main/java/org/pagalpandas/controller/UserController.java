package org.pagalpandas.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.pagalpandas.dto.RegistrationInfo;
import org.pagalpandas.dto.UserCredentials;
import org.pagalpandas.service.UserService;
import org.pagalpandas.utils.UnauthorizedException;
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
    public String login(@RequestBody UserCredentials creds) throws UnauthorizedException {
        return this.service.login(creds);
    }

    @PostMapping("register")
    public String register(@RequestBody RegistrationInfo regInfo) throws JsonProcessingException {
        String serialized = new ObjectMapper().writeValueAsString(regInfo);
        return serialized;
    }

}