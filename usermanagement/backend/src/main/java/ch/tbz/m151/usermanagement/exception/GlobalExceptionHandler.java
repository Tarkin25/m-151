package ch.tbz.m151.usermanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<BadRequestMessage> badRequest(MethodArgumentNotValidException e) {
        return new ResponseEntity<>(new BadRequestMessage(e.getBindingResult().getFieldErrors()), HttpStatus.BAD_REQUEST);
    }

}
