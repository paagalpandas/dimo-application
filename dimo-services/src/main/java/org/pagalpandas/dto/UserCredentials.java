package org.pagalpandas.dto;

public class UserCredentials {
    public String email;

    //TODO: Change this later to a hash.
    public String password;


    public UserCredentials(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
