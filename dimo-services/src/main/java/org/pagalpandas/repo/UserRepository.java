package org.pagalpandas.repo;

import org.pagalpandas.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, Long> {

    @Query("{ 'email' : ?0 , 'password' : ?1 }")
    public User getUserByEmailAndPassword(String email, String password);

}
