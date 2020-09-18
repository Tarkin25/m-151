package ch.tbz.m151.usermanagement.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Documented
@Constraint(validatedBy = AHVNumberValidator.class)
public @interface AHVNumber {

    String message() default "required and must be of pattern " + AHVNumberValidator.REGEX;
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

}
