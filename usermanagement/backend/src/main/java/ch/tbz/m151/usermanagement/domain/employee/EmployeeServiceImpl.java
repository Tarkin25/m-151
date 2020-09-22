package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.domain.department.DepartmentService;
import ch.tbz.m151.usermanagement.domain.job.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final DepartmentService departmentService;
    private final JobService jobService;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository, DepartmentService departmentService, JobService jobService) {
        this.employeeRepository = employeeRepository;
        this.departmentService = departmentService;
        this.jobService = jobService;
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
        employee.setDepartment(departmentService.findById(employee.getDepartment().getId()));
        if(employee.getJob() != null) {
            employee.setJob(jobService.findById(employee.getJob().getId()));
        }

        return employeeRepository.create(employee);
    }

    @Override
    public Employee updateById(String id, Employee employee) {
        employee.setId(id);
        employee.setDepartment(departmentService.findById(employee.getDepartment().getId()));
        if(employee.getJob() != null) {
            employee.setJob(jobService.findById(employee.getJob().getId()));
        }

        return employeeRepository.update(employee);
    }

    @Override
    public void deleteById(String id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public boolean existsByAhvNumber(String ahvNumber, String excludeId) {
        return employeeRepository.existsByAhvNumber(ahvNumber, excludeId);
    }

    @Override
    public boolean existsByPersonalNumber(String personalNumber, String excludeId) {
        return employeeRepository.existsByPersonalNumber(personalNumber, excludeId);
    }
}
