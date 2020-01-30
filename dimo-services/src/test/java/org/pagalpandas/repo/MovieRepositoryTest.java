package org.pagalpandas.repo;

import org.junit.jupiter.api.Test;
import org.pagalpandas.entity.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class MovieRepositoryTest {
    @Autowired
    MovieRepository movieRepository;
    @Test
    public void testSearchContainsInKeyword(){
        List<Movie> resultList = movieRepository.findByKeywordsNameIgnoreCaseContaining("Marvel comic");
        assertEquals(34, resultList.size());
    }
    @Test
    public void testSearchContainsInTitle(){
        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("The Good Dinosaur");
        assertEquals("The Good Dinosaur", ((Movie)resultList.get(0)).getTitle());
    }
    @Test
    public void testSearchDoesNotContainInTitle(){
        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("1915");
        assertEquals(0, resultList.size());
    }

    @Test
    public void testSearchContainInTitleForSome(){

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("The");
        assertEquals(1455, resultList.size());
    }

}
