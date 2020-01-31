package org.pagalpandas.service.impl;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.MovieService;

import org.pagalpandas.util.MovieEntityDTOConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
	public MovieDetailsDTO getMovie(ObjectId id) {
		Movie movie=movieRepository.getMovieById(id);
		MovieDetailsDTO movieDetailsDTO = movieEntityDTOConverter.convertEntityToMovieDetailDTO(movie);
		return movieDetailsDTO;
		
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

		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();

		Page<Movie> moviePage = movieRepository.findAll(PageRequest.of(0, topN, Sort.by(Sort.Direction.DESC,"popularity")) );

		for (Movie movie:moviePage) {

			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;
	}

	public List<MovieDTO> getTopNMoviesByOriginalLanguage(String originalLanguage, int topN){
		if(topN<0) topN = 5;

		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();

		Page<Movie> moviePage = movieRepository.findByOriginalLanguage(originalLanguage, PageRequest.of(0, topN, Sort.by(Sort.Direction.DESC,"popularity")) );

		for (Movie movie:moviePage) {

			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;

	}

	public List<MovieDTO> getTopNMoviesByProductionCompany(String productionCompany, int topN){
		if(topN<0) topN = 5;

		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();

		Page<Movie> moviePage = movieRepository.findByProductionCompaniesNameIgnoreCaseContaining (productionCompany, PageRequest.of(0, topN, Sort.by(Sort.Direction.DESC,"popularity")) );

		for (Movie movie:moviePage) {

			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;
	}

	public List<MovieDTO> getTopNMoviesByGenre(String genreName, int topN){
		if(topN<0) topN = 5;

		List<MovieDTO> movieDTOList = new ArrayList<MovieDTO>();

		Page<Movie> moviePage = movieRepository.findByGenresNameIgnoreCaseContaining (genreName, PageRequest.of(0, topN, Sort.by(Sort.Direction.DESC,"popularity")) );

		for (Movie movie:moviePage) {

			movieDTOList.add(movieEntityDTOConverter.convertEntityToDTO(movie));
		}
		return movieDTOList;
	}


}
