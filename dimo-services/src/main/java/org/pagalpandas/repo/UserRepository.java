package org.pagalpandas.repo;

import org.pagalpandas.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public boolean matchCredentials(String email, String passwordHash);
    public User getProfile(String email);

    User findByEmail(String emailId);
}
