package org.pagalpandas.repo;

import org.pagalpandas.entity.Login;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<Login,String> {
}
