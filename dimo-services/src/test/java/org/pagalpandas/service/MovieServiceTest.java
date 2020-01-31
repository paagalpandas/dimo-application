package org.pagalpandas.service;

import org.junit.jupiter.api.Test;
import org.pagalpandas.dto.MovieDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class MovieServiceTest {

    @Autowired
    MovieService movieService;

    @Test
    public void testfindTopTen(){

        List<MovieDTO> movieDTOList = movieService.getTopTenMovies();
        assertEquals(10, movieDTOList.size());
    }

    @Test
    public void testfindTopNTrendingOrder(){

        List<MovieDTO> movieDTOList = movieService.getTopNTrendingMovies(10);
        assertEquals(10, movieDTOList.size());
        assertEquals("Minions", movieDTOList.get(0).getTitle());
        float prevPopulariy =10000;
        for (MovieDTO movieDTO: movieDTOList) {
            System.out.println(movieDTO.getTitle() + ", pop: " + movieDTO.getPopularity());
            assertTrue(movieDTO.getPopularity() < prevPopulariy);
            prevPopulariy = movieDTO.getPopularity();
        }
    }

    @Test
    public void testfindTopNTrendingCount(){

        List<MovieDTO> movieDTOList = movieService.getTopNTrendingMovies(10);
        for (MovieDTO movieDTO: movieDTOList) {
            System.out.println(movieDTO.getTitle() + ", pop: " + movieDTO.getPopularity());
        }
        assertEquals(10, movieDTOList.size());
    }
    @Test
    public void testfindTopNTrendingWithNegativeN(){

        List<MovieDTO> movieDTOList = movieService.getTopNTrendingMovies(-7);
        for (MovieDTO movieDTO: movieDTOList) {
            System.out.println(movieDTO.getTitle() + ", pop: " + movieDTO.getPopularity());
        }
        assertEquals(5, movieDTOList.size());
    }

    @Test
    public void testfindTopNMoviesByLanguageOrderAndCount(){

        List<MovieDTO> movieDTOList = movieService.getTopNMoviesByOriginalLanguage("en", 10);
        assertEquals(10, movieDTOList.size());
        assertEquals("Minions", movieDTOList.get(0).getTitle());
        float prevPopulariy =10000;
        for (MovieDTO movieDTO: movieDTOList) {
            System.out.println(movieDTO.getTitle() + ", pop: " + movieDTO.getPopularity());
            assertTrue(movieDTO.getPopularity() < prevPopulariy);
            prevPopulariy = movieDTO.getPopularity();
        }
    }

    @Test
    public void testfindTopNMoviesByNotFoundLanguage(){

        List<MovieDTO> movieDTOList = movieService.getTopNMoviesByOriginalLanguage("ab", 10);
        assertEquals(0, movieDTOList.size());

    }

    @Test
    public void testfindTopNMoviesByProductionCompanyOrderAndCount(){

        List<MovieDTO> movieDTOList = movieService.getTopNMoviesByProductionCompany ("Walt Disney", 5);
        assertEquals(5, movieDTOList.size());
        //assertEquals("Minions", movieDTOList.get(0).getTitle());
        float prevPopulariy =10000;
        for (MovieDTO movieDTO: movieDTOList) {
            System.out.println(movieDTO.getTitle() + ", pop: " + movieDTO.getPopularity());
            assertTrue(movieDTO.getPopularity() < prevPopulariy);
            prevPopulariy = movieDTO.getPopularity();
        }
    }

    @Test
    public void testfindTopNMoviesByNotFoundProductionCompany(){

        List<MovieDTO> movieDTOList = movieService.getTopNMoviesByProductionCompany("DinosaurCompany", 10);
        assertEquals(0, movieDTOList.size());

    }
}
