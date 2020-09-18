package ch.tbz.m151.usermanagement.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Documented
@Constraint(validatedBy = BirthDateValidator.class)
public @interface BirthDate {

    String message() default "required and must be an ISO date in the past";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

}
