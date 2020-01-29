package org.pagalpandas.repo;

import org.apache.commons.lang3.StringUtils;
import org.pagalpandas.entity.Movie;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MovieRepositoryStub implements MovieRepository {

    List<Movie> movieList = new ArrayList<>();

    public List<Movie> findByTitleIgnoreCaseContainingOrKeywordsIgnoreCaseContaining(String searchString, String keySearchString) {
        List<Movie> resultList = new ArrayList<>();
        String normalisedSearchString = StringUtils.normalizeSpace(searchString);
        for (Movie movie : movieList) {
            boolean matchFound = movie.getTitle().toLowerCase().contains(normalisedSearchString.toLowerCase().subSequence(0, normalisedSearchString.length()));
            if (matchFound) {
                resultList.add(movie);
            }
        }
        return resultList;
    }

    @Override
    public List<Movie> findAll() {
        return null;
    }

    @Override
    public List<Movie> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Movie> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<Movie> findAllById(Iterable<Long> iterable) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(Movie movie) {

    }

    @Override
    public void deleteAll(Iterable<? extends Movie> iterable) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends Movie> S save(S s) {
        movieList.add(s);
        return s;
    }

    @Override
    public <S extends Movie> List<S> saveAll(Iterable<S> iterable) {
        return null;
    }

    @Override
    public Optional<Movie> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public void flush() {
    }

    @Override
    public <S extends Movie> S saveAndFlush(S s) {
        return null;
    }

    @Override
    public void deleteInBatch(Iterable<Movie> iterable) {
    }

    @Override
    public void deleteAllInBatch() {
    }

    @Override
    public Movie getOne(Long aLong) {
        return null;
    }

    @Override
    public <S extends Movie> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Movie> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Movie> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Movie> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Movie> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Movie> boolean exists(Example<S> example) {
        return false;
    }
}
