package org.pagalpandas.service.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.pagalpandas.dto.CredentialsDTO;
import org.pagalpandas.dto.LoginResponseDTO;
import org.pagalpandas.entity.Profile;
import org.pagalpandas.entity.Role;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.pagalpandas.repo.ProfileRepository;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.pagalpandas.utils.Constants.AUTHORITIES;
import static org.pagalpandas.utils.Constants.SECRET;

class UserServiceImplTest {

    @Mock
    ProfileRepository repository;

    @InjectMocks
    UserServiceImpl service;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void loginSuccessful() throws UnauthorizedException {
        when(repository.matchCredentials(any(), any())).thenReturn(true);

        Profile profile = new Profile();
        profile.setId("007");
        profile.setFirstName("Foo");
        profile.setLastName("Bar");
        profile.setEmail("foo@bar.com");
        profile.setRoles(Arrays.asList(Role.ROLE_ADMIN, Role.ROLE_VIEWER));

        when(repository.getProfile("foo@bar.com")).thenReturn(profile);
        CredentialsDTO dto = new CredentialsDTO("foo@bar.com", "passwordHash");
        LoginResponseDTO responseDTO = service.login(dto);
        assertNotNull(responseDTO);

        String token = responseDTO.getToken();

        Claims claims = parseToken(token);
        assertEquals("foo@bar.com", claims.getSubject());
        assertEquals("Foo", claims.get("FirstName"));
        assertEquals("Bar", claims.get("LastName"));
        assertEquals(Role.ROLE_ADMIN.getAuthority() + "," + Role.ROLE_VIEWER.getAuthority(), claims.get(AUTHORITIES));
    }

    @Test
    public void loginFailed() throws UnauthorizedException {
        when(repository.matchCredentials(any(), any())).thenReturn(false);
        CredentialsDTO dto = new CredentialsDTO("foo@bar.com", "passwordHash");
        assertThrows(UnauthorizedException.class, () -> {
            service.login(dto);
        });
    }

    private Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET.getBytes())
                .parseClaimsJws(token).getBody();
    }
}