package org.pagalpandas.controller;

import org.junit.jupiter.api.Test;
import org.pagalpandas.dto.CategoryDTO;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Genre;
import org.pagalpandas.entity.ProductionCompany;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class DashboardControllerTest {

    @Autowired
    DashboardController dashboardController;

    @Test
    public void testDashboardDataFetch() throws UnauthorizedException {

        List<CategoryDTO> dashboardData = dashboardController.get(null);

        boolean isTrendingPresent = false;
        boolean isGenrePresent = false;
        boolean isLanguagePresent = false;
        boolean isProdCompanyPresent = false;

        String productionCompany = "Walt Disney";
        String genreName = "Romance";

        for (CategoryDTO categoryDTO: dashboardData) {
            if(categoryDTO.category.equalsIgnoreCase("trending") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) isTrendingPresent = true;
            if(categoryDTO.category.equalsIgnoreCase("Romance") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) isGenrePresent = true;
            if(categoryDTO.category.equalsIgnoreCase("French") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) {
                isLanguagePresent = true;
                for (MovieDTO movieDTO:categoryDTO.movies) {
                    assertEquals("fr", movieDTO.getOriginalLanguage());
                }
            }
            if(categoryDTO.category.equalsIgnoreCase(productionCompany) && categoryDTO.movies !=null && categoryDTO.movies.size()>0) {
                isProdCompanyPresent = true;
                for (MovieDTO movieDTO:categoryDTO.movies) {
                    boolean isProducedBy = false;
                    List<ProductionCompany> productionCompanies = movieDTO.getProductionCompanies();
                    for (ProductionCompany pc: productionCompanies) {
                        if(pc.getName().contains(productionCompany.subSequence(0,productionCompany.length())) ){isProducedBy = true;}
                    }
                    assertEquals(true, isProducedBy);
                }
            }


        }
        assertTrue(isTrendingPresent && isLanguagePresent && isProdCompanyPresent);
    }
}
