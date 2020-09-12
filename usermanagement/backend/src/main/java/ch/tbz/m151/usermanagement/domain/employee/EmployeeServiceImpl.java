package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.domain.department.DepartmentRepository;
import ch.tbz.m151.usermanagement.domain.job.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final JobRepository jobRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository, JobRepository jobRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public Collection<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(String id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Employee create(Employee employee) {
        employee.setId(UUID.randomUUID().toString());
        employee.setDepartment(departmentRepository.findById(employee.getDepartment().getId()));
        if(employee.getJob() != null) {
            employee.setJob(jobRepository.findById(employee.getJob().getId()));
        }

        return employeeRepository.create(employee);
    }

    @Override
    public Employee updateById(String id, Employee employee) {
        employee.setId(id);
        employee.setDepartment(departmentRepository.findById(employee.getDepartment().getId()));
        if(employee.getJob() != null) {
            employee.setJob(jobRepository.findById(employee.getJob().getId()));
        }

        return employeeRepository.update(employee);
    }

    @Override
    public void deleteById(String id) {
        employeeRepository.deleteById(id);
    }
}
