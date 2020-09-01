package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.domain.department.Department;
import ch.tbz.m151.usermanagement.domain.job.Job;

import java.time.LocalDate;

public class Employee {

    private String id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String ahvNumber;
    private LocalDate birthDate;
    private String personalNumber;
    private Department department;
    private Job job;

    public Employee() {
    }

    public Employee(String id, String firstName, String lastName, String username, String password, String email, String ahvNumber, LocalDate birthDate, String personalNumber, Department department, Job job) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.ahvNumber = ahvNumber;
        this.birthDate = birthDate;
        this.personalNumber = personalNumber;
        this.department = department;
        this.job = job;
    }

    public String getId() {
        return id;
    }

    public Employee setId(String id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public Employee setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public Employee setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Employee setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public Employee setPassword(String password) {
        this.password = password;
        return this;
    }

    public Department getDepartment() {
        return department;
    }

    public Employee setDepartment(Department department) {
        this.department = department;
        return this;
    }

    public Job getJob() {
        return job;
    }

    public Employee setJob(Job job) {
        this.job = job;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Employee setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getAhvNumber() {
        return ahvNumber;
    }

    public Employee setAhvNumber(String ahvNumber) {
        this.ahvNumber = ahvNumber;
        return this;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public Employee setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
        return this;
    }

    public String getPersonalNumber() {
        return personalNumber;
    }

    public Employee setPersonalNumber(String personalNumber) {
        this.personalNumber = personalNumber;
        return this;
    }
}
