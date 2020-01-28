package org.pagalpandas.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.pagalpandas.entity.*;

import org.pagalpandas.service.SearchService;
import org.pagalpandas.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



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

