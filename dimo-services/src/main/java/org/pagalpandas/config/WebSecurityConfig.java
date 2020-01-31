package org.pagalpandas.config;

import org.pagalpandas.security.JwtTokenFilterConfigurer;
import org.pagalpandas.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // Disable CSRF (cross site request forgery)
        http.csrf().disable();
        http.cors().disable();

        // No session will be created or used by spring security
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Entry points
        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/*.*").permitAll()
                .antMatchers("/assets/*.*").permitAll()
                .antMatchers("/api/users/login").permitAll()//
                .antMatchers("/api/users/register").permitAll()//
                .antMatchers("/api/ping").permitAll()//
                // Disallow everything else..
                .anyRequest().authenticated();

        // Apply JWT
        http.apply(new JwtTokenFilterConfigurer(jwtTokenProvider));
    }
}