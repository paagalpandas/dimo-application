package org.pagalpandas.service;

import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.dto.UserDTO;
import org.pagalpandas.exceptions.UnauthorizedException;

public interface UserService {
    public LoginResponseDTO login(CredentialsDTO creds) throws UnauthorizedException;

    String register(UserDTO userDTO) throws Exception;
}
