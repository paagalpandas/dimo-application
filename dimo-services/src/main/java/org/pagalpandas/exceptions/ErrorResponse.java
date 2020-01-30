package org.pagalpandas.exceptions;

public class ErrorResponse {
	private String errorMessage;
	private String errorCode;


	public ErrorResponse(String errorCode, String errorMessage) {
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
}
