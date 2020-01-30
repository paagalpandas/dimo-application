package org.pagalpandas.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.repo.MovieRepository;
import org.pagalpandas.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    MovieRepository movieRepository;

    public List<Movie> searchByKeyWord(String searchString) throws Exception {

        String normalisedTrimmedString = StringUtils.normalizeSpace(searchString).trim();

        return movieRepository.findByTitleIgnoreCaseContaining(normalisedTrimmedString);

   }
    public String echo(String s) throws Exception {
        throw new Exception("SearchService.echo not implemented");
    }
}
