package org.pagalpandas.service.impl;

import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.MovieEntity;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	MovieRepository movieRepository;

	@Override
	public MovieDTO getMovie(Long id) {
		MovieEntity movieEntity=movieRepository.getOne(id);
		//TODO:
		//return converted DTO from entity using mapper.
		return null;
		
	}

}
