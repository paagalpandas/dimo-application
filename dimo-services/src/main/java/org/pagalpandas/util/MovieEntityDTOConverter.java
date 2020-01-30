package org.pagalpandas.util;

import org.modelmapper.ModelMapper;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MovieEntityDTOConverter {

    @Autowired
    ModelMapper modelMapper;

    public MovieDTO convertEntityToDTO(Movie movie)
    {
        MovieDTO movieDTO = modelMapper.map(movie,MovieDTO.class);
        movieDTO.setDescription(movieDTO.getTagline());
        movieDTO.setName(movieDTO.getTitle());
        movieDTO.setThumbNail(movieDTO.getPoster());
        return movieDTO;
    }
}
