package org.pagalpandas.controller;

import org.pagalpandas.dto.CategoryDTO;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    MovieService movieService;

    @GetMapping("")
    public List<CategoryDTO> get(Authentication auth) throws UnauthorizedException {

//        if (!auth.getName().equals("foo@bar.com")) {
//            throw new UnauthorizedException();
//        }

        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        String[] cats = {"Trending", "French", "Walt Disney"};

        return getDashboardData();

    }

    private List<CategoryDTO> getDashboardData() {
        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        String[] cats = {"Trending", "French", "Walt Disney"};
        List<MovieDTO> movieDTOS = movieService.getTopNTrendingMovies(5);
        List<MovieDTO> movieDTOSByLanguage = movieService.getTopNMoviesByOriginalLanguage("fr", 5);
        List<MovieDTO> movieDTOSByProdCompany = movieService.getTopNMoviesByProductionCompany ("Walt Disney", 5);

        for (String c : cats) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.category = c;
            switch(c){
                case "Trending": categoryDTO.movies = movieDTOS;break;
                case "French"  : categoryDTO.movies = movieDTOSByLanguage;break;
                case "Walt Disney" : categoryDTO.movies = movieDTOSByProdCompany;break;
            }
            categoryDTOS.add(categoryDTO);
        }
        return categoryDTOS;
    }

    private List<CategoryDTO> dummyData() {
        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        String[] cats = {"Trending", "French", "Walt Disney"};
        List<MovieDTO> movieDTOS = new ArrayList<>();

        MovieDTO movieDTO = new MovieDTO();
        movieDTO.setName("Interstellar");
        movieDTO.setDescription("About movie...");
        movieDTO.setThumbNail("https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg");

        movieDTOS.add(movieDTO);
        movieDTOS.add(movieDTO);
        movieDTOS.add(movieDTO);
        movieDTOS.add(movieDTO);
        movieDTOS.add(movieDTO);

        for (String c : cats) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.category = c;
            categoryDTO.movies = movieDTOS;
            categoryDTOS.add(categoryDTO);
        }
        return categoryDTOS;
    }
}
