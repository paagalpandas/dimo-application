//package org.pagalpandas.service;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.pagalpandas.entity.Movie;
//import org.pagalpandas.repo.MovieRepository;
//import org.pagalpandas.service.impl.SearchServiceImpl;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//public class SearchServiceTest {
//
//    @Mock
//    MovieRepository  movieRepository;
//
//    @InjectMocks
//    SearchService searchService = new SearchServiceImpl();
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
//        when(movieRepository.findByTitleIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);
//
//        List<Movie> searchResult = searchService.searchByKeyWord("1917");
//        assertEquals(expectedSearchResult, searchResult);
//
//    }
//
//    @Test
//    public void testSearchSingleWordInTitleNotFound() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResult();
//        when(movieRepository.findByTitleIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);
//
//        List<Movie> searchResult = searchService.searchByKeyWord("Mission Impossible");
//        assertEquals(0, searchResult.size() );
//    }
//
//    @Test
//    public void testSearchStringWithSpaceSeperationContainsInTitle() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
//        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
//
//        List<Movie> resultList = searchService.searchByKeyWord("The Good");
//        assertEquals(3, resultList.size());
//        assertEquals("The Good Dinosaur", ((Movie)resultList.get(0)).getTitle());
//    }
//
//    @Test
//    public void testSearchStringWithSpaceSeperationTrimmedContainsInTitle() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
//        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
//
//        List<Movie> resultList = searchService.searchByKeyWord("TheGood");
//        assertEquals(0, resultList.size());
//
//    }
//
//    @Test
//    public void testSearchStringWithLeadingSpacesContainsInTitle() throws Exception {
//        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
//        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
//
//        List<Movie> resultList = searchService.searchByKeyWord("    The Good");
//        assertEquals(3, resultList.size());
//    }
//
//    @Test
//    public void testSearchStringWithTrailingSpacesContainsInTitle() throws Exception {
//
//        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
//        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
//
//        List<Movie> resultList = searchService.searchByKeyWord("The Good   ");
//        assertEquals(3, resultList.size());
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
//    public List<Movie> getExpectedSearchResultFoSpacesTest(){
//
//        List<Movie> searchResult = new ArrayList<Movie>();
//        searchResult.add(new Movie(1, "The Good Dinosaur", "A joyful story about life"));
//        searchResult.add(new Movie(1, "Panda The Good", "A joyful story about paagal pandas"));
//        searchResult.add(new Movie(1, "TRex - The Good Dinosaur", "A joyful story about life"));
//
//        return searchResult;
//    }
//}
