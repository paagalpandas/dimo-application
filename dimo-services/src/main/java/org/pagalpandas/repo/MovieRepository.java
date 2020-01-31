package org.pagalpandas.repo;

import org.bson.types.ObjectId;
import org.pagalpandas.entity.Movie;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MovieRepository extends MongoRepository<Movie, Long> {

    List<Movie> findByTitleIgnoreCaseContaining(String titleSearchString);
    List<Movie> findByKeywordsNameIgnoreCaseContaining(String keyword);
    Movie getMovieById(ObjectId id);
    List<Movie> findByGenresName(String name, Pageable page);
    Page<Movie> findByOriginalLanguage(String originalLanguage, Pageable pageable);
    Page<Movie> findByProductionCompaniesNameIgnoreCaseContaining(String productionCompany, Pageable pageable);

    Page<Movie> findByGenresNameIgnoreCaseContaining(String genreName, Pageable pageable);

    @Override
    List<Movie> findAll();

    Page<Movie> findAll(Pageable pageable);

 }
