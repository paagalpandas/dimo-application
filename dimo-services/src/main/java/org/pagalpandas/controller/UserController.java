package org.pagalpandas.controller;

import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.dto.ResponseDTO;
import org.pagalpandas.dto.UserDTO;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("login")
    public LoginResponseDTO login(@RequestBody CredentialsDTO credentialsDTO) throws UnauthorizedException {
        return this.service.login(credentialsDTO);
    }

    @PostMapping("register")
    public ResponseEntity<ResponseDTO> register(@RequestBody UserDTO userDTO) throws Exception {
        ResponseDTO<String> responseDTO= new ResponseDTO<>();
        responseDTO.setData(this.service.register(userDTO));
        return new ResponseEntity<ResponseDTO>(responseDTO, HttpStatus.ACCEPTED);

    }

}