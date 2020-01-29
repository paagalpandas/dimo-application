package org.pagalpandas.service;

import org.bson.types.ObjectId;
import org.pagalpandas.dto.MovieDTO;
import org.springframework.stereotype.Service;


@Service
public interface MovieService {

	public MovieDTO getMovie(ObjectId id);

}
