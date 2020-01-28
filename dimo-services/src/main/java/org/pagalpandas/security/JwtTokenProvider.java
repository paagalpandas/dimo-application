package org.pagalpandas.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.pagalpandas.entity.Role;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

import static org.pagalpandas.utils.Constants.AUTHORITIES;
import static org.pagalpandas.utils.Constants.SECRET;

@Component
public class JwtTokenProvider {

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public boolean validateToken(String token) {
        // TODO Auto-generated method stub
        return true;
    }

    public Authentication getAuthentication(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET.getBytes())
                .parseClaimsJws(token).getBody();

        String csvRoles = claims.get(AUTHORITIES, String.class);

        ArrayList<Role> roles = new ArrayList<>();
        for (String strRole : csvRoles.split(",")) {
            Role role = Role.valueOf(strRole);
            roles.add(role);
        }

        UserDetails userDetails = org.springframework.security.core.userdetails.User//
                .withUsername(claims.getSubject())//
                .password("")
                .authorities(roles)//
                .accountExpired(false)//
                .accountLocked(false)//
                .credentialsExpired(false)//
                .disabled(false)//
                .build();

        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }
}