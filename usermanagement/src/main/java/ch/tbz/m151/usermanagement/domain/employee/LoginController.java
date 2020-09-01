package ch.tbz.m151.usermanagement.domain.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public LoginController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    /*@PostMapping
    public ResponseEntity<Map<String, Object>> login(@RequestBody Employee employee) throws Exception {
        Map<String, Object> result = employeeRepository.findByUsernameAndPassword(employee.getUsername(), employee.getPassword());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }*/
}
