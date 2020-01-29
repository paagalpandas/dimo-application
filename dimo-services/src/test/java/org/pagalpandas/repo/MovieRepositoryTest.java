package org.pagalpandas.repo;

import org.junit.jupiter.api.Test;
import org.pagalpandas.entity.Movie;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MovieRepositoryTest {

    @Test
    public void testSearchContainsInTitle() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitle();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1917", "1917");
        assertEquals(testList, resultList);
    }

    @Test
    public void testSearchDoesNotContainInTitle() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitle();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1915", "1917");
        assertEquals(0, resultList.size());
    }

    @Test
    public void testSearchDoesNotContainInTitleForSome() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitleForSome();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1915", "1917");
        assertEquals(1, resultList.size());
        assertEquals("1915 a love story", resultList.get(0).getTitle());
    }

    @Test
    public void testSearchStringWithSpaceSeperationContainsInTitle() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitle();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("in     1917", "1917");
        assertEquals(2, resultList.size());
    }

    @Test
    public void testSearchStringWithLeadingSpacesContainsInTitle() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitle();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("     1917", "1917");
        assertEquals(testList, resultList);
    }

    @Test
    public void testSearchStringWithTrailingSpacesContainsInTitle() {
        MovieRepository movieRepository = new MovieRepositoryStub();
        List<Movie> testList = getTestMovieListForContainsInTitle();

        for (Movie movie : testList) {
            movieRepository.save(movie);
        }

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1917     ", "1917");
        assertEquals(testList, resultList);
    }

    private List<Movie> getTestMovieListForContainsInTitle() {
        List<Movie> searchResult = new ArrayList<>();
        searchResult.add(new Movie(1, "Once upon a time in 1917", "A peaceful story about war"));
        searchResult.add(new Movie(1, "1917", "A modern story about war"));
        searchResult.add(new Movie(1, "Robot1917", "A modern story about robots"));
        searchResult.add(new Movie(1, "1917 a love story", "A modern story about love and war"));
        searchResult.add(new Movie(1, "What happened in 1917 stays at 1917", "A mystery story about love and war"));
        return searchResult;
    }

    private List<Movie> getTestMovieListForContainsInTitleForSome() {
        List<Movie> searchResult = new ArrayList<>();
        searchResult.add(new Movie(1, "Once upon a time in 1917", "A peaceful story about war"));
        searchResult.add(new Movie(1, "2917", "A futuristic  story about war"));
        searchResult.add(new Movie(1, "Robot1917", "A modern story about robots"));
        searchResult.add(new Movie(1, "1915 a love story", "A modern story about love and war"));
        searchResult.add(new Movie(1, "What happened in 1917 stays at 1917", "A mystery story about love and war"));
        return searchResult;
    }
}
