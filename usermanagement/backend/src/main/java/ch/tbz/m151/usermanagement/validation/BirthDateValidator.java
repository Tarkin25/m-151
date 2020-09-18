package ch.tbz.m151.usermanagement.validation;

import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.DateTimeException;
import java.time.LocalDate;

@Component
public class BirthDateValidator implements ConstraintValidator<BirthDate, LocalDate> {

    @Override
    public boolean isValid(LocalDate value, ConstraintValidatorContext context) {
        if(value != null) {
            try {
                return value.isBefore(LocalDate.now());
            } catch (DateTimeException ignored) {}
        }

        return false;
    }
}
