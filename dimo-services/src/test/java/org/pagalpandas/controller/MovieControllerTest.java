package org.pagalpandas.controller;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.Test;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class MovieControllerTest {
    @Autowired
    MovieController movieController;

    @Test
    public void testGetMovieById() throws Exception {
        ResponseEntity<ResponseDTO> responseEntity= movieController.getMovies("5e2fe41d2b023a0de86b0a21");
        MovieDTO movieDTO= (MovieDTO)responseEntity.getBody().getData();
        assertEquals("The Good Dinosaur",movieDTO.getName());
        assertEquals("https://dummyimage.com/300x400/000000/15ff00&text=No+poster+found",movieDTO.getThumbNail());
        assertEquals("Little Arms With Big Attitude",movieDTO.getDescription());
    }

}

