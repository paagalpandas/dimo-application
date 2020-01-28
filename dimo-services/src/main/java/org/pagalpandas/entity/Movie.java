package org.pagalpandas.entity;

public class Movie {

    private int id;
    private String title;
    private String tagLine;

    public Movie(int id, String title, String tagLine){
        this.id = id;
        this.title = title;
        this.tagLine = tagLine;
    }

    public int getId() {
        return id;
    }


    public String getTitle() {
        return title;
    }


    public String getTagLine() {
        return tagLine;
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
