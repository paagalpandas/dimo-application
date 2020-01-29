package org.pagalpandas.repo;

import org.pagalpandas.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Long> {

    @Query("{ 'email' : ?0 , 'password' : ?1 }")
    public User getUserByEmailAndPassword(String email, String password);

    User findByEmail(String emailId);


}
