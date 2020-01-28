package org.pagalpandas.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.controller.SearchController;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.impl.SearchServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class SearchServiceTest {

    @Mock
    MovieRepository  movieRepository;

    @InjectMocks
    SearchService searchService = new SearchServiceImpl();

    @BeforeEach
    public void setMock(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSearchSingleWordInTitleSuccess() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();
        when(movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);

        List<Movie> searchResult = searchService.searchByKeyWord("1917");
        assertEquals(expectedSearchResult, searchResult);

    }

    @Test
    public void testSearchSingleWordInTitleNotFound() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();
        when(movieRepository.findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);

        List<Movie> searchResult = searchService.searchByKeyWord("Mission Impossible");
        assertEquals(0, searchResult.size() );
    }

    public List<Movie> getExpectedSearchResult(){

        List<Movie> searchResult = new ArrayList<Movie>();
        searchResult.add(new Movie(1, "Once upon a time in 1917", "A peaceful story about war"));
        searchResult.add(new Movie(1, "1917", "A modern story about war"));
        return searchResult;
    }
}
