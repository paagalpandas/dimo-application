package org.pagalpandas.repo;

import org.apache.commons.lang3.StringUtils;
import org.bson.types.ObjectId;
import org.pagalpandas.entity.Movie;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//Stub Not used anymore. retaining for future purpose.
public class MovieRepositoryStub implements MovieRepository{

    List<Movie> movieList = new ArrayList<Movie>();

    public List<Movie> findByTitleIgnoreCaseContaining(String searchString){

        List<Movie> resultList = new ArrayList<Movie>();
       String normalisedSearchString = StringUtils.normalizeSpace(searchString);
       System.out.println("["+ searchString + "] normalised to [" + normalisedSearchString + "]");
        for (Movie movie:movieList) {
            boolean matchFound = movie.getTitle().toLowerCase().contains(normalisedSearchString.toLowerCase().subSequence(0,normalisedSearchString.length()));
            if(matchFound  ){
                resultList.add(movie);
            }
        }
        return resultList;

    }

    public Movie getMovieById(ObjectId id){
        return null;
    }

    @Override
    public <S extends Movie> S save(S entity) {
        return null;
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
    public List<Movie> findAll() {
        return null;
    }

    @Override
    public Iterable<Movie> findAllById(Iterable<Long> longs) {
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
    public void delete(Movie entity) {

    }

    @Override
    public void deleteAll(Iterable<? extends Movie> entities) {

    }

    @Override
    public void deleteAll() {

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
    public <S extends Movie> S insert(S s) {
        return null;
    }

    @Override
    public <S extends Movie> List<S> insert(Iterable<S> iterable) {
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
