package org.pagalpandas.dto;

import org.pagalpandas.entity.Movie;

import java.util.List;

public class MovieDetailsDTO {
    private String title;
    private String releaseDate;
    private String tagLine;
    private String language;
    private List<String> genre;
    private List<Movie> similarMovies;
    private String overview;
    private String thumbNail;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getTagLine() {
        return tagLine;
    }

    public void setTagLine(String tagLine) {
        this.tagLine = tagLine;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<String> getGenre() {
        return genre;
    }

    public void setGenre(List<String> genre) {
        this.genre = genre;
    }

    public List<Movie> getSimilarMovies() {
        return similarMovies;
    }

    public void setSimilarMovies(List<Movie> similarMovies) {
        this.similarMovies = similarMovies;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getThumbNail() {
        return thumbNail;
    }

    public void setThumbNail(String thumbNail) {
        this.thumbNail = thumbNail;
    }
}
