package org.pagalpandas.service;

import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface SearchService {

    public List<Movie> searchByKeyWord(String searchString) throws Exception;
    public String echo(String s) throws Exception;
}
