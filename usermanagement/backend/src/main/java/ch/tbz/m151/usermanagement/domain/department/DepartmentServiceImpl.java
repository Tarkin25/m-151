package ch.tbz.m151.usermanagement.domain.department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Collection<Department> findAll() {
        return departmentRepository.findAll();
    }

    @Override
    public Department findById(String id) {
        return departmentRepository.findById(id);
    }
}
