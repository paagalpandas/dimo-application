//package org.pagalpandas.controller;
//
//import org.aspectj.lang.annotation.Before;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.pagalpandas.dto.MovieDTO;
//import org.pagalpandas.entity.Movie;
//import org.pagalpandas.service.SearchService;
//import org.pagalpandas.service.impl.SearchServiceImpl;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//
//public class SearchControllerTest {
//
//    @Mock
//    SearchServiceImpl searchService;
//
//    @InjectMocks
//    SearchController searchController = new SearchController();
//
//
//    @BeforeEach
//    public void setMock(){
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    public void testSearchSingleWordInTitleSuccess() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResult();
//       when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);
//
//        List<MovieDTO> searchResult = searchController.Search("1917");
//        assertEquals(expectedSearchResult, searchResult);
//
//    }
//
//    @Test
//    public void testSearchSingleWordInTitleNotFound() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResult();
//        when(searchService.searchByKeyWord("1917")).thenReturn(expectedSearchResult);
//
//        List<MovieDTO> searchResult = searchController.Search("Mission Impossible");
//        assertEquals(0, searchResult.size() );
//    }
//
//    @Test
//    public void testEmptySearchString() throws Exception {
//
//        List<Movie> searchResult = searchController.Search("");
//        verify(searchService, never()).searchByKeyWord(anyString());
//    }
//
//    @Test
//    public void testNullSearchString() throws Exception {
//
//        List<Movie> searchResult = searchController.Search(null);
//        verify(searchService, never()).searchByKeyWord(anyString());
//    }
//
//    public List<Movie> getExpectedSearchResult(){
//
//        List<Movie> searchResult = new ArrayList<Movie>();
//        searchResult.add(new Movie(1, "Once upon a time in 1917", "A peaceful story about war"));
//        searchResult.add(new Movie(1, "1917", "A modern story about war"));
//        return searchResult;
//    }
//
//
//}
