package org.pagalpandas.repo;

import org.pagalpandas.entity.Profile;

public interface UserRepository {
    boolean matchCredentials(String email, String passwordHash);
    Profile getProfile(String email);
}
