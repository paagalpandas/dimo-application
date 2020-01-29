package org.pagalpandas.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.pagalpandas.entity.*;

import org.pagalpandas.service.SearchService;
import org.pagalpandas.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;


@RestController
@RequestMapping("/api/")
public class SearchController {

    @Autowired
    SearchServiceImpl searchService;


   // @GetMapping(value="/{searchString}")
   @GetMapping("search")
    public List<Movie> Search(@RequestParam(value="searchString", required=false)  String searchString) throws Exception {
        if(searchString == null || searchString.isEmpty()) return new ArrayList<Movie>();
        return searchService.searchByKeyWord(searchString);
    }

    public String Echo(String s) throws Exception {
       return searchService.echo(s);
    }

}

