package org.pagalpandas.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.impl.SearchServiceImpl;
import org.pagalpandas.util.MovieEntityDTOConverter;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SearchServiceTest {

    @Mock
    MovieRepository  movieRepository;

    @Mock
    MovieEntityDTOConverter movieEntityDTOConverter;

    @InjectMocks
    SearchServiceImpl searchService;

    @BeforeEach
    public void setMock(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSearchSingleWordInTitleSuccess() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();

        when(movieRepository.findByTitleIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);
        when(movieEntityDTOConverter.convertEntityToDTO(any())).thenReturn(new MovieDTO());

        List<MovieDTO> searchResult = searchService.searchByKeyWord("1917");

        assertEquals(expectedSearchResult.size(),searchResult.size());
    }

    @Test
    public void testSearchSingleWordInTitleNotFound() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResult();
        when(movieRepository.findByTitleIgnoreCaseContaining("1917")).thenReturn(expectedSearchResult);

        List<MovieDTO> searchResult = searchService.searchByKeyWord("Mission Impossible");
        assertEquals(0, searchResult.size() );
    }

    @Test
    public void testSearchStringWithSpaceSeperationContainsInTitle() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
        when(movieEntityDTOConverter.convertEntityToDTO(any())).thenReturn(new MovieDTO());

        List<MovieDTO> resultList = searchService.searchByKeyWord("The Good");
        assertEquals(3, resultList.size());
    }

    @Test
    public void testSearchStringWithSpaceSeperationTrimmedContainsInTitle() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);

        List<MovieDTO> resultList = searchService.searchByKeyWord("TheGood");
        assertEquals(0, resultList.size());

    }

    @Test
    public void testSearchStringWithLeadingSpacesContainsInTitle() throws Exception {
        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
        when(movieEntityDTOConverter.convertEntityToDTO(any())).thenReturn(new MovieDTO());

        List<MovieDTO> resultList = searchService.searchByKeyWord("    The Good");
        assertEquals(3, resultList.size());
    }

    @Test
    public void testSearchStringWithTrailingSpacesContainsInTitle() throws Exception {

        List<Movie> expectedSearchResult = getExpectedSearchResultFoSpacesTest();
        when(movieRepository.findByTitleIgnoreCaseContaining("The Good")).thenReturn(expectedSearchResult);
        when(movieEntityDTOConverter.convertEntityToDTO(any())).thenReturn(new MovieDTO());

        List<MovieDTO> resultList = searchService.searchByKeyWord("The Good   ");
        assertEquals(3, resultList.size());
    }

    public List<Movie> getExpectedSearchResult(){

        List<Movie> searchResult = new ArrayList<Movie>();
        searchResult.add(new Movie(1, "Once upon a time in 1917", "A peaceful story about war"));
        searchResult.add(new Movie(1, "1917", "A modern story about war"));
        return searchResult;
    }

    public List<Movie> getExpectedSearchResultFoSpacesTest(){

        List<Movie> searchResult = new ArrayList<Movie>();
        searchResult.add(new Movie(1, "The Good Dinosaur", "A joyful story about life"));
        searchResult.add(new Movie(1, "Panda The Good", "A joyful story about paagal pandas"));
        searchResult.add(new Movie(1, "TRex - The Good Dinosaur", "A joyful story about life"));

        return searchResult;
    }
}
