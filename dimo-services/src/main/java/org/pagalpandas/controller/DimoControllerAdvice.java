package org.pagalpandas.controller;

import javax.servlet.http.HttpServletRequest;

import org.pagalpandas.dto.ResponseDTO;
import org.pagalpandas.exceptions.ErrorResponse;
import org.pagalpandas.exceptions.ResourceNotFoundException;
import org.pagalpandas.exceptions.UserAlreadyExistsException;
import org.pagalpandas.exceptions.UnauthorizedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@ControllerAdvice
public class DimoControllerAdvice {

    private static final Logger LOGGER = LoggerFactory.getLogger(DimoControllerAdvice.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public @ResponseBody
    ResponseEntity<ResponseDTO> handleResourceNotFound(final ResourceNotFoundException exception,
                                                       final HttpServletRequest request) {

        LOGGER.error("Resource Not Found Exception occcured in the system due to {}", exception.getCause());


		ResponseDTO responseDTO = new ResponseDTO();
		List<ErrorResponse> errorResponseList=new ArrayList<>();
		errorResponseList.add(new ErrorResponse(null, "Internal Server Error"));
		responseDTO.setErrorResponse(errorResponseList);


        return new ResponseEntity<>(responseDTO, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public @ResponseBody
    ResponseEntity<ResponseDTO> handleMethodArgumentNotValidException(final MethodArgumentNotValidException exception,
                                                                      final HttpServletRequest request) {

        List<ErrorResponse> errorResponseList = exception.getBindingResult().getFieldErrors().stream().map(error -> new ErrorResponse(null, error.getDefaultMessage())).collect(Collectors.toList());

        LOGGER.error("Method Argument Not Valid Exception occured in system due to {}", exception.getCause());

		ResponseDTO responseDTO = new ResponseDTO();

		responseDTO.setErrorResponse(errorResponseList);

        return new ResponseEntity<>(responseDTO, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public @ResponseBody
    ResponseEntity<ResponseDTO> handleException(final UserAlreadyExistsException exception,
                                                final HttpServletRequest request) {

        LOGGER.error("Exception occured in system due to {}", exception.getCause());


        ResponseDTO responseDTO = new ResponseDTO();
        List<ErrorResponse> errorResponseList=new ArrayList<>();
        errorResponseList.add(new ErrorResponse(null, exception.getMessage()));
        responseDTO.setErrorResponse(errorResponseList);

        return new ResponseEntity<>(responseDTO, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UnauthorizedException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public @ResponseBody
    ResponseEntity<ResponseDTO> handleUnAuthorisedException(final UnauthorizedException exception,
                                                final HttpServletRequest request) {

        LOGGER.error("User credentials invalid ", exception.getCause());


        ResponseDTO responseDTO = new ResponseDTO();
        List<ErrorResponse> errorResponseList=new ArrayList<>();
        errorResponseList.add(new ErrorResponse(null, "User credentials invalid"));
        responseDTO.setErrorResponse(errorResponseList);


        ResponseEntity reponseEntity = new ResponseEntity<>(responseDTO, HttpStatus.BAD_REQUEST);

        return reponseEntity;
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public @ResponseBody
    ResponseEntity<ResponseDTO> handleException(final Exception exception,
                                                final HttpServletRequest request) {

        LOGGER.error("Exception occured in system due to {}", exception.getCause());


        ResponseDTO responseDTO = new ResponseDTO();
        List<ErrorResponse> errorResponseList=new ArrayList<>();
		errorResponseList.add(new ErrorResponse(null, exception.getMessage()));
        responseDTO.setErrorResponse(errorResponseList);


        return new ResponseEntity<>(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
