package org.pagalpandas.repo;

import org.pagalpandas.entity.Profile;

public interface UserRepository {
    public boolean matchCredentials(String email, String passwordHash);
    public Profile getProfile(String email);
}
