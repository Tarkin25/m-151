package ch.tbz.m151.usermanagement.validation;

import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@Component
public class AHVNumberValidator implements ConstraintValidator<AHVNumber, String> {

    static final String REGEX = "[0-9]{3}\\.[0-9]{4}\\.[0-9]{4}\\.[0-9]{2}";

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value != null && value.matches(REGEX);
    }
}
