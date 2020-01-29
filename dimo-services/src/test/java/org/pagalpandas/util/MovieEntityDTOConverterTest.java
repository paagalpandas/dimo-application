package org.pagalpandas.util;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.pagalpandas.dto.MovieDTO;
import org.pagalpandas.entity.Movie;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class MovieEntityDTOConverterTest {
    @InjectMocks
    MovieEntityDTOConverter movieEntityDTOConverter = new MovieEntityDTOConverter();

    @Mock
    ModelMapper modelMapper;

    @BeforeEach
    public void setMock(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testconvertEntityToDTO()
    {
        Movie movie = new Movie();
        when(modelMapper.map(movie, MovieDTO.class)).thenReturn(new MovieDTO());
        MovieDTO movieDTO=movieEntityDTOConverter.convertEntityToDTO(movie);
        verify(modelMapper,times(1)).map(movie, MovieDTO.class);
    }

}