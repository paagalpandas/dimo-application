package org.pagalpandas.entity;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.util.List;

@Document(collection = "movies")
public class Movie {

    public Movie(){}

    @Id
    private ObjectId id;
    private int movieId;
    private String title;
    private List<Keyword> keywords;
    private String tagline;
    private String Poster;
    private List<Genre> genres;
    private String release_date;
    @Field("original_language")
    private String originalLanguage;
    @Field("production_companies")
    private List<ProductionCompany> productionCompanies;
    private String overview;

    private float popularity;

    public Movie(int movieId, String title, String tagline){
        this.movieId = movieId;
        this.title = title;
        this.tagline = tagline;
    }

    public int getMovieId() {
        return movieId;
    }


    public List<ProductionCompany> getProductionCompanies() {
        return productionCompanies;
    }

    public void setProductionCompanies(List<ProductionCompany> productionCompanies) {
        this.productionCompanies = productionCompanies;
    }
    public List<Keyword> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<Keyword> keywords) {
        this.keywords = keywords;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public String getRelease_date() {
        return release_date;
    }

    public String getOriginalLanguage() {
        return originalLanguage;
    }

    public String getOverview() {
        return overview;
    }

    public void setOriginalLanguage(String originalLanguage) {
        this.originalLanguage = originalLanguage;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getTitle() {
        return title;
    }

    public String getPoster() {
        return Poster;
    }

    public void setPoster(String poster) {
        this.Poster = poster;
    }

    public String getTagline() {
        return tagline;
    }

    public ObjectId getId() {
        return id;
    }

    public float getPopularity() {
        return popularity;
    }

    @Override
    public int hashCode() {
        int result = title.hashCode();
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj ) return true;
        if (obj==null || this.getClass()!= obj.getClass()) return false;
        Movie movie = (Movie)obj;
        return title.equalsIgnoreCase(movie.title);
    }
}
