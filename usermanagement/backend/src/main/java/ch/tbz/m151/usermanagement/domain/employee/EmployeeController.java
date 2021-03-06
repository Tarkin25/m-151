package ch.tbz.m151.usermanagement.domain.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<Collection<Employee>> findAll() {
        Collection<Employee> employees = employeeService.findAll();

        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable String id) {
        Employee employee = employeeService.findById(id);

        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @GetMapping("/exists")
    public ResponseEntity<Boolean> exists(@RequestParam(required = false) String ahvNumber, @RequestParam(required = false) String personalNumber, @RequestParam(required = false) String excludeId) {
        boolean exists = false;

        if(ahvNumber != null) {
            exists = employeeService.existsByAhvNumber(ahvNumber, excludeId);
        } else if(personalNumber != null) {
            exists = employeeService.existsByPersonalNumber(personalNumber, excludeId);
        }

        return new ResponseEntity<>(exists, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody @Valid Employee employee) {
        employee = employeeService.create(employee);

        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateById(@PathVariable String id, @RequestBody @Valid Employee employee) {
        employee = employeeService.updateById(id, employee);

        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        employeeService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
