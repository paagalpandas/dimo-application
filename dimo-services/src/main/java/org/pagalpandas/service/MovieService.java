package org.pagalpandas.service;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface MovieService {

	public MovieDetailsDTO getMovie(ObjectId id);
	public List<MovieDTO> getTopTenMovies();
	public List<MovieDTO> getTopNTrendingMovies(int topN);
	public List<MovieDTO> getTopNMoviesByOriginalLanguage(String originalLanguage, int topN);
	public List<MovieDTO> getTopNMoviesByProductionCompany(String productionCompany, int topN);

}
