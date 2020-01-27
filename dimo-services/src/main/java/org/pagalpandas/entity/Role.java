package org.pagalpandas.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
	ROLE_ADMIN, ROLE_VIEWER;

	public String getAuthority() {
		return name();
	}

}
