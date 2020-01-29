package org.pagalpandas.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.service.impl.SearchServiceImpl;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


public class SearchControllerTest {

    @Mock
    SearchServiceImpl searchService;

    @InjectMocks
    SearchController searchController = new SearchController();

    @BeforeEach
    public void setMock() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSearchSingleWordInTitleSuccess() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();
        when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);

        List<Movie> searchResult = searchController.Search("1917");
        assertEquals(expectedSearchResult, searchResult);

    }

    @Test
    public void testSearchSingleWordInTitleNotFound() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();
        when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);

        List<Movie> searchResult = searchController.Search("Mission Impossible");
        assertEquals(0, searchResult.size());
    }

    private List<Movie> getExpectedSearchResult() {
        return Arrays.asList(
                new Movie(1, "Once upon a time in 1917", "A peaceful story about war"),
                new Movie(1, "1917", "A modern story about war")
        );
    }
}
