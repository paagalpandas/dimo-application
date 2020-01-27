package org.pagalpandas.controller;

import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.ResponseDTO;
import org.pagalpandas.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController(value="/api/movies")
public class MovieController {
	
	@Autowired
	private MovieService homeService;
	
	
	
	
	@GetMapping(value="/{id}")
	public ResponseEntity<ResponseDTO> getMovies(@PathVariable("id") Long id) throws Exception {

		ResponseDTO responseTO = new ResponseDTO();
		responseTO.setData(homeService.getMovie(id));
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	public void saveMovie(@Valid @RequestBody MovieDTO movieDTO) {
		
	}

     
}
