package org.pagalpandas.controller;

import java.util.ArrayList;
import java.util.List;

import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.*;

import org.pagalpandas.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    SearchServiceImpl searchService;


   // @GetMapping(value="/{searchString}")
   @GetMapping("")
    public List<MovieDTO> Search(@RequestParam(value="searchString", required=false)  String searchString) throws Exception {
        if(searchString == null || searchString.isEmpty()) return new ArrayList<MovieDTO>();
        return searchService.searchByKeyWord(searchString);
    }

    public String Echo(String s) throws Exception {
       return searchService.echo(s);
    }

}

