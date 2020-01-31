package org.pagalpandas.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.entity.MoviePopularityComparator;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.SearchService;
import org.pagalpandas.util.MovieEntityDTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    MovieEntityDTOConverter movieEntityDTOConverter;

    public List<MovieDTO> searchByKeyWord(String searchString) throws Exception {

        String normalisedTrimmedString = StringUtils.normalizeSpace(searchString).trim();

        List<Movie> moviesBasedOnTitle=movieRepository.findByTitleIgnoreCaseContaining(normalisedTrimmedString);
        List<Movie> moviesBasedOnKeyword = movieRepository.findByKeywordsNameIgnoreCaseContaining(normalisedTrimmedString);
        List<Movie> movies = new ArrayList<>();
        Set<Movie> uniqueMovies =new LinkedHashSet<>();

        moviesBasedOnTitle.sort(new MoviePopularityComparator());
        moviesBasedOnKeyword.sort(new MoviePopularityComparator());

        uniqueMovies.addAll(moviesBasedOnTitle);
        uniqueMovies.addAll(moviesBasedOnKeyword);

        movies.addAll(uniqueMovies);


        List<MovieDTO> movieDTOS = new ArrayList<>();

        for(Movie movie: movies)
        {
            movieDTOS.add(movieEntityDTOConverter.convertEntityToDTO(movie));
        }
        return movieDTOS;
   }
    public String echo(String s) throws Exception {
        throw new Exception("SearchService.echo not implemented");
    }
}
