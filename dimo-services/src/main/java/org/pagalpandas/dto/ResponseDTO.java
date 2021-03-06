package org.pagalpandas.dto;

import org.pagalpandas.exceptions.ErrorResponse;

import java.io.Serializable;
import java.util.List;

public class ResponseDTO<T>  implements Serializable {
	
	private T data;
	
	private List<ErrorResponse> errorResponse;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}


	public List<ErrorResponse> getErrorResponse() {
		return errorResponse;
	}

	public void setErrorResponse(List<ErrorResponse> errorResponse) {
		this.errorResponse = errorResponse;
	}


}
