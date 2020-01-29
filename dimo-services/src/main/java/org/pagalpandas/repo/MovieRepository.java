package org.pagalpandas.repo;

import org.pagalpandas.entity.Movie;
import org.pagalpandas.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining(String titleSearchString, String keySearchString);
    
}
