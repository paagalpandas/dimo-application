package org.pagalpandas.repo;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.Test;
import org.pagalpandas.dto.MovieDetailsDTO;
import org.pagalpandas.entity.Movie;
import org.pagalpandas.entity.ProductionCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class MovieRepositoryTest {
    @Autowired
    MovieRepository movieRepository;
    @Test
    public void testSearchContainsInKeyword(){
        List<Movie> resultList = movieRepository.findByKeywordsNameIgnoreCaseContaining("Marvel comic");
        assertEquals(34, resultList.size());
    }
    @Test
    public void testSearchContainsInTitle(){
        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("The Good Dinosaur");
        assertEquals("The Good Dinosaur", ((Movie)resultList.get(0)).getTitle());
    }
    @Test
    public void testSearchDoesNotContainInTitle(){
        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("1915");
        assertEquals(0, resultList.size());
    }

    @Test
    public void testSearchContainInTitleForSome(){

        List<Movie> resultList = movieRepository.findByTitleIgnoreCaseContaining("The");
        assertEquals(1455, resultList.size());
    }



    @Test
    public void testfindAll(){

        List<Movie> resultList = movieRepository.findAll();
        assert(resultList.size()==4800);

    }

    @Test
    public void testfindByOriginalLanguagePaged(){

        //test with English
        Page<Movie> resultList = movieRepository.findByOriginalLanguage("en",
                PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC,"popularity")) );
        assert(resultList.getContent().size()==10);
        for (Movie movie: resultList) {
            System.out.println(movie.getTitle() + " in " + movie.getOriginalLanguage());
            assertEquals("en", movie.getOriginalLanguage());
        }

        //test with french
        resultList = movieRepository.findByOriginalLanguage("fr",
                PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC,"popularity")) );
        assert(resultList.getContent().size()==10);
        for (Movie movie: resultList) {
            System.out.println(movie.getTitle() + " in " + movie.getOriginalLanguage());
            assertEquals("fr", movie.getOriginalLanguage());
        }

    }
    @Test
    public void testfindByOriginalLanguageNotFoundPaged() {

        //test with English
        Page<Movie> resultList = movieRepository.findByOriginalLanguage("xy",
                PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "popularity")));
        assert (resultList.getContent().size() == 0);
    }

    @Test
    public void testfindByProductionCompanyPaged(){

        //test with Walt Disney
        String productionCompany = "Walt Disney";
        Page<Movie> resultList = movieRepository.findByProductionCompaniesNameIgnoreCaseContaining(productionCompany,
                PageRequest.of(0, 5, Sort.by(Sort.Direction.DESC,"popularity")) );
        assert(resultList.getContent().size()==5);
        for (Movie movie: resultList) {
            System.out.println(movie.getTitle() + " in " + movie.getProductionCompanies());
            boolean isProducedBy = false;
            List<ProductionCompany> productionCompanies = movie.getProductionCompanies();
            for (ProductionCompany pc: productionCompanies) {
                if(pc.getName().contains(productionCompany.subSequence(0,productionCompany.length())) ){isProducedBy = true;}
                else{
                    System.out.println("Mismatch prod company - " + pc.getName());
                }
            }
            assertEquals(true, isProducedBy);
        }

        //test with Pixar
        productionCompany = "Pixar";
        resultList = movieRepository.findByProductionCompaniesNameIgnoreCaseContaining(productionCompany,
                PageRequest.of(0, 5, Sort.by(Sort.Direction.DESC,"popularity")) );
        assert(resultList.getContent().size()==5);
        for (Movie movie: resultList) {
            System.out.println(movie.getTitle() + " in " + movie.getProductionCompanies());
            boolean isProducedBy = false;
            List<ProductionCompany> productionCompanies = movie.getProductionCompanies();
            for (ProductionCompany pc: productionCompanies) {
                if(pc.getName().contains(productionCompany.subSequence(0,productionCompany.length())) ){isProducedBy = true;}
                else{
                    System.out.println("Mismatch prod company - " + pc.getName());
                }
            }
            assertEquals(true, isProducedBy);
        }

    }

}
