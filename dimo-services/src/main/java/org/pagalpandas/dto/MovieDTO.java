package org.pagalpandas.dto;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class MovieDTO implements Serializable {


    private String id;

   @NotNull(message="Movie Name cannot be null")
   private String title;
   private String tagline;
   private String poster;
   private String description;//temporary placeholder because of UI
   private String name;//temporary placeholder because of UI
   private String thumbNail;//temporary placeholder because of UI

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
}
