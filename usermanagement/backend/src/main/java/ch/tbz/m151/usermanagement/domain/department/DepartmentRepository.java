package ch.tbz.m151.usermanagement.domain.department;

import java.util.Collection;

public interface DepartmentRepository {

    Collection<Department> findAll();

    Department findById(String id);

}
