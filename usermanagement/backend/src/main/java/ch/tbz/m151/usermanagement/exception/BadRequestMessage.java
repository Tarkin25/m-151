package ch.tbz.m151.usermanagement.exception;

import org.springframework.validation.FieldError;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class BadRequestMessage {

    private final Map<String, ValueAndMessage> errors;

    public BadRequestMessage(List<FieldError> errors) {
        this.errors = new LinkedHashMap<>();

        errors.forEach(error -> {
            this.errors.put(error.getField(), new ValueAndMessage(error.getRejectedValue(), error.getDefaultMessage()));
        });
    }

    public Map<String, ValueAndMessage> getErrors() {
        return errors;
    }

    public static class ValueAndMessage {

        private final Object value;
        private final String message;

        public ValueAndMessage(Object value, String message) {
            this.value = value;
            this.message = message;
        }

        public Object getValue() {
            return value;
        }

        public String getMessage() {
            return message;
        }
    }

}
