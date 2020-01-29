package org.pagalpandas.service;

import org.pagalpandas.entity.Movie;

import java.util.List;

public interface SearchService {

    List<Movie> searchByKeyWord(String searchString) throws Exception;
    String echo(String s) throws Exception;
}
