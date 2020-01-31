package org.pagalpandas.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;

@Configuration
public class ApplicationConfig {
	
@Bean
public ModelMapper getModelMapper()
{
    return  new ModelMapper();
}

@Bean
public SimpleDateFormat getSimpleDateFormat() { return new SimpleDateFormat("MMM, YYYY"); }
}
