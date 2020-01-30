package org.pagalpandas.service;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.springframework.stereotype.Service;


@Service
public interface MovieService {

	public MovieDetailsDTO getMovie(ObjectId id);

}
