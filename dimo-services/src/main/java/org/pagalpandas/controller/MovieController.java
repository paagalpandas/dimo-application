package org.pagalpandas.controller;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.ResponseDTO;
import org.pagalpandas.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<ResponseDTO> getMovies(@PathVariable("id") String id) throws Exception {

        ObjectId objectId = new ObjectId(id);
        ResponseDTO responseTO = new ResponseDTO();
        responseTO.setData(movieService.getMovie(objectId));
        return new ResponseEntity<>(responseTO, HttpStatus.OK);
    }


    public void saveMovie(@Valid @RequestBody MovieDTO movieDTO) {

    }


}
