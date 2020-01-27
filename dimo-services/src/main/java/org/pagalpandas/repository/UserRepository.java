package org.pagalpandas.repository;

import org.pagalpandas.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    public User get(String email) {
        User u = new User();
        u.setEmail("foo@bar.com");
        u.setPassword("secret!@#");
        return u;
    }
}
