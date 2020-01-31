package org.pagalpandas.dto;

import org.pagalpandas.entity.ProductionCompany;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

public class MovieDTO implements Serializable {


    private String id;

   @NotNull(message="Movie Name cannot be null")
   private String title;
   private String tagline;
   private String poster;
   private String description;//temporary placeholder because of UI
   private String name;//temporary placeholder because of UI
   private String thumbNail;//temporary placeholder because of UI
    private  String originalLanguage;
    private List<ProductionCompany> productionCompanies;



    public List<ProductionCompany> getProductionCompanies() {
        return productionCompanies;
    }

    public void setProductionCompanies(List<ProductionCompany> productionCompanies) {
        this.productionCompanies = productionCompanies;
    }
    public String getOriginalLanguage() {
        return originalLanguage;
    }

    public void setOriginalLanguage(String originalLanguage) {
        this.originalLanguage = originalLanguage;
    }



    public void setPopularity(float popularity) {
        this.popularity = popularity;
    }

    private float popularity;

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getThumbNail() {
        return thumbNail;
    }

    public void setThumbNail(String thumbNail) {
        this.thumbNail = thumbNail;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public void setDescription(String description) {
        this.description=description;
    }

    public float getPopularity() {
        return popularity;
    }
}
