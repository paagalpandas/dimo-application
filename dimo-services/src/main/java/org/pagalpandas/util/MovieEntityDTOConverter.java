package org.pagalpandas.util;

import org.modelmapper.ModelMapper;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.pagalpandas.entity.Genre;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.LanguageRepository;
import org.pagalpandas.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MovieEntityDTOConverter {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private LanguageRepository languageRepository;
    @Autowired
    DateFormatter dateFormatter;

    public MovieDTO convertEntityToDTO(Movie movie)
    {
        MovieDTO movieDTO = modelMapper.map(movie,MovieDTO.class);
        movieDTO.setDescription(movieDTO.getTagline());
        movieDTO.setName(movieDTO.getTitle());
        movieDTO.setThumbNail(movieDTO.getPoster());
        return movieDTO;
    }

    public MovieDetailsDTO convertEntityToMovieDetailDTO(Movie movie) {
        MovieDetailsDTO movieDetailsDTO = modelMapper.map(movie, MovieDetailsDTO.class);
        movieDetailsDTO.setThumbNail(movie.getPoster());
        movieDetailsDTO.setLanguage(languageRepository.getLanguageName(movie.getOriginalLanguage()));
        List<Movie> movies = (movieRepository.findByGenresName(movie.getGenres().get(0).getName() , PageRequest.of(0,5, Sort.by(Sort.Direction.DESC,"popularity"))));
        movieDetailsDTO.setReleaseDate(dateFormatter.format(movie.getRelease_date()));

        List<String> genres = new ArrayList<>();
        for(Genre genre : movie.getGenres())
            genres.add(genre.getName());

        List<MovieDTO> movieDTOS = new ArrayList<>();
        for(Movie movieData : movies)
            movieDTOS.add(convertEntityToDTO(movieData));

        movieDetailsDTO.setGenre(genres);
        movieDetailsDTO.setSimilarMovies(movieDTOS);
        return movieDetailsDTO;
    }

}
