package org.pagalpandas.dto;

public class CredentialsDTO {
    public String email;

    //TODO: Change this later to a hash.
    public String passwordHash;

    public CredentialsDTO(String email, String passwordHash) {
        this.email = email;
        this.passwordHash = passwordHash;
    }
}
