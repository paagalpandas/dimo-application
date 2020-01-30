package org.pagalpandas.service.impl;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.entity.MoviePopularityComparator;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.MovieService;

import org.pagalpandas.util.MovieEntityDTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	MovieEntityDTOConverter movieEntityDTOConverter;

	@Override
	public MovieDTO getMovie(ObjectId id) {
		Movie movie=movieRepository.getMovieById(id);
		MovieDTO movieDTO = movieEntityDTOConverter.convertEntityToDTO(movie);
		return movieDTO;
		
	}

	public List<MovieDTO> getTopTenMovies(){
		List<Movie> movies = movieRepository.findAll().subList(0,10);
		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();
		for (Movie movie:movies) {
			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;
	}

	public List<MovieDTO> getTopNTrendingMovies(int topN){
		if(topN<0) topN = 5;
		List<Movie> movies = movieRepository.findAll();
		movies.sort(new MoviePopularityComparator());
		List<Movie> topNMovies = movies.subList(0, topN);

		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();
		for (Movie movie:topNMovies) {
			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;
	}
}
