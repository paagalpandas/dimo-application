package org.pagalpandas.controller;

import org.pagalpandas.entity.Movie;
import org.pagalpandas.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchController {

    @Autowired
    SearchServiceImpl searchService;

    @GetMapping("search")
    public List<Movie> Search(String searchString) throws Exception {

        return searchService.searchByKeyWord(searchString);
    }

    public String Echo(String s) throws Exception {
        return searchService.echo(s);
    }
}

