package ch.tbz.m151.usermanagement;

import ch.tbz.m151.usermanagement.domain.department.Department;
import ch.tbz.m151.usermanagement.domain.employee.Employee;
import ch.tbz.m151.usermanagement.domain.employee.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.UUID;

@SpringBootApplication
public class UsermanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermanagementApplication.class, args);
	}

	@Bean
	public CommandLineRunner test(EmployeeRepository repository) {
		return args -> {
			Employee employee = new Employee()
			.setId(UUID.randomUUID().toString())
			.setFirstName("John")
			.setLastName("Doe")
			.setPassword("12345")
			.setEmail("john.doe@example.com")
			.setAhvNumber("111.1111.1111.11")
			.setBirthDate(LocalDate.now())
			.setPersonalNumber(UUID.randomUUID().toString())
			.setDepartment(new Department().setId("11111-11111-11111-11111-11111-11111-"));

			repository.create(employee);
		};
	}

}
