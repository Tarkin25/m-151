package ch.tbz.m151.usermanagement.domain.department;

import java.util.Collection;

public interface DepartmentService {

    Collection<Department> findAll();

    Department findById(String id);

}
