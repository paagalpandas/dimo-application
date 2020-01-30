package org.pagalpandas.service;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface MovieService {

	public MovieDTO getMovie(ObjectId id);
	public List<MovieDTO> getTopTenMovies();
	public List<MovieDTO> getTopNTrendingMovies(int topN);


}
