package org.pagalpandas.entity;

import java.util.Comparator;

public class MoviePopularityComparator implements Comparator<Movie>
{
    // Used for sorting in ascending order of
    // roll number
    public int compare(Movie a, Movie b)
    {
        float popularityDelta = a.getPopularity() - b.getPopularity();
        int compareResult = (int) (Math.ceil(popularityDelta*100));
        return -compareResult;
    }
}
