package org.pagalpandas.entity;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document(collection = "image_test")
public class Movie {

    public Movie(){}

    @Id
    private ObjectId id;
    private int movieId;
    private String title;
    private List<Keyword> keywords;
    private String tagline;
    private String Poster;

    public Movie(int movieId, String title, String tagline){
        this.movieId = movieId;
        this.title = title;
        this.tagline = tagline;
    }

    public int getMovieId() {
        return movieId;
    }

    public List<Keyword> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<Keyword> keywords) {
        this.keywords = keywords;
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
