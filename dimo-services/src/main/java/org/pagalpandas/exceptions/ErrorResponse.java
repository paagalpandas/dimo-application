package org.pagalpandas.exceptions;

import java.io.Serializable;

public class ErrorResponse implements Serializable {
	private String errorMessage;
	private String errorCode;


	public ErrorResponse(String errorCode, String errorMessage) {
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public String getErrorCode() {
		return errorCode;
	}
}
