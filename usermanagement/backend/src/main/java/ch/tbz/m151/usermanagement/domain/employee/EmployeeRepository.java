package ch.tbz.m151.usermanagement.domain.employee;

import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface EmployeeRepository {

    Collection<Employee> findAll();

    Employee findById(String id);

    Employee create(Employee employee);

    Employee update(Employee employee);

    void deleteById(String id);

    boolean existsByAhvNumber(String ahvNumber, String excludeId);

    boolean existsByPersonalNumber(String personalNumber, String excludeId);

}
