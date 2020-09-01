package ch.tbz.m151.usermanagement.domain.employee;

import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface EmployeeRepository {

    Collection<Employee> findAll();

    Employee create(Employee employee);

    Employee update(Employee employee);

    void deleteById(String id);

}
