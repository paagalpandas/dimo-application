package org.pagalpandas.entity;

import java.util.Comparator;

public class MoviePopularityComparator implements Comparator<Movie> {

    public int compare(Movie m1, Movie m2)
    {
        float delta = m1.getPopularity() - m2.getPopularity();
        int compareResult = (int) delta*100;
        return -compareResult;
    }
}
