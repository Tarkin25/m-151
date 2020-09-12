package ch.tbz.m151.usermanagement.domain.employee;

import java.util.Collection;

public interface EmployeeService {

    Collection<Employee> findAll();

    Employee findById(String id);

    Employee create(Employee employee);

    Employee updateById(String id, Employee employee);

    void deleteById(String id);

}
