package org.pagalpandas.repo;

import org.pagalpandas.entity.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<Profile, Integer> {

    public Profile findByEmail(String email);
}
