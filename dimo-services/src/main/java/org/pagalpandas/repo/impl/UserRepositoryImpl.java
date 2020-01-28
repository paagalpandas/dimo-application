package org.pagalpandas.repo.impl;

import org.pagalpandas.entity.Profile;
import org.pagalpandas.entity.Role;
import org.pagalpandas.repo.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @Override
    public boolean matchCredentials(String email, String passwordHash) {
        return true;
    }

    @Override
    public Profile getProfile(String email) {
        Profile profile = new Profile();
        profile.setEmail(email);
        profile.setFirstName("Foo");
        profile.setLastName("Bar");
        profile.setRoles(Arrays.asList(Role.ROLE_VIEWER, Role.ROLE_ADMIN));
        return profile;
    }
}