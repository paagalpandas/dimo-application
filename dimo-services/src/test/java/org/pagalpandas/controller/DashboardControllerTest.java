package org.pagalpandas.controller;

import org.junit.jupiter.api.Test;
import org.pagalpandas.dto.CategoryDTO;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class DashboardControllerTest {

    @Autowired
    DashboardController dashboardController;

    @Test
    public void testDashboardDataFetch() throws UnauthorizedException {

        List<CategoryDTO> dashboardData = dashboardController.get(null);

        boolean isTrendingPresent = false;
        boolean isLanguagePresent = false;
        boolean isProdCompanyPresent = false;

        for (CategoryDTO categoryDTO: dashboardData) {
            if(categoryDTO.category.equalsIgnoreCase("trending") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) isTrendingPresent = true;
            if(categoryDTO.category.equalsIgnoreCase("French") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) isLanguagePresent = true;
            if(categoryDTO.category.equalsIgnoreCase("Walt Disney") && categoryDTO.movies !=null && categoryDTO.movies.size()>0) isProdCompanyPresent = true;
        }
        assertTrue(isTrendingPresent && isLanguagePresent && isProdCompanyPresent);
    }
}
