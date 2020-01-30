package org.pagalpandas.repo;

import org.bson.types.ObjectId;
import org.pagalpandas.entity.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MovieRepository extends MongoRepository<Movie, Long> {

    List<Movie> findByTitleIgnoreCaseContaining(String titleSearchString);
    Movie getMovieById(ObjectId id);

    @Override
    List<Movie> findAll();


 }
