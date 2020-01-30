package org.pagalpandas.controller;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.service.impl.SearchServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class SearchControllerTest {

    @Mock
    SearchServiceImpl searchService;

    @InjectMocks
    SearchController searchController = new SearchController();


    @BeforeEach
    public void setMock(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSearchSingleWordInTitleSuccess() throws Exception {

        List<MovieDTO> expectedSearchResult = getExpectedSearchResult();
       when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);

        List<MovieDTO> searchResult = searchController.Search("1917");
        assertEquals(expectedSearchResult, searchResult);

    }

    @Test
    public void testSearchSingleWordInTitleNotFound() throws Exception {

        List<MovieDTO> expectedSearchResult = getExpectedSearchResult();
        when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);

        List<MovieDTO> searchResult = searchController.Search("Mission Impossible");
        assertEquals(0, searchResult.size() );
    }

    @Test
    public void testEmptySearchString() throws Exception {

        List<MovieDTO> searchResult = searchController.Search("");
        verify(searchService, never()).searchByKeyWord(anyString());
    }

    @Test
    public void testNullSearchString() throws Exception {

        List<MovieDTO> searchResult = searchController.Search(null);
        verify(searchService, never()).searchByKeyWord(anyString());
    }

    public List<MovieDTO> getExpectedSearchResult(){

        List<MovieDTO> searchResult = new ArrayList<MovieDTO>();

        MovieDTO movieDTO1 = new MovieDTO();
        movieDTO1.setName("Once upon a time in 1917");
        movieDTO1.setTagline("A peaceful story about war");

        MovieDTO movieDTO2 = new MovieDTO();
        movieDTO2.setName("1917");
        movieDTO2.setTagline("A modern story about war");

        searchResult.add(movieDTO1);
        searchResult.add(movieDTO2);

        return searchResult;
    }


}
