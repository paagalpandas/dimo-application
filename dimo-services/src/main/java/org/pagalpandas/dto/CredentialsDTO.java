package org.pagalpandas.dto;

public class CredentialsDTO {
    public String email;

    //TODO: Change this later to a hash.
    public String password;

    public CredentialsDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
