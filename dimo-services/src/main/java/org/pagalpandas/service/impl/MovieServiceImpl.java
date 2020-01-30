package org.pagalpandas.service.impl;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.MovieService;

import org.pagalpandas.util.MovieEntityDTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	MovieEntityDTOConverter movieEntityDTOConverter;

	@Override
	public MovieDetailsDTO getMovie(ObjectId id) {
		Movie movie=movieRepository.getMovieById(id);
		MovieDetailsDTO movieDetailsDTO = movieEntityDTOConverter.convertEntityToMovieDetailDTO(movie);
		return movieDetailsDTO;
		
	}
}
