package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.domain.department.Department;
import ch.tbz.m151.usermanagement.domain.job.Job;
import ch.tbz.m151.usermanagement.validation.AHVNumber;
import ch.tbz.m151.usermanagement.validation.BirthDate;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Employee {

    private String id;

    @NotNull(message = "required")
    private String firstName;

    @NotNull(message = "required")
    private String lastName;

    @Email
    private String email;

    @AHVNumber
    private String ahvNumber;

    @BirthDate
    private LocalDate birthDate;

    @NotNull(message = "required")
    private String personalNumber;

    @NotNull(message = "required")
    private Department department;

    private Job job;

    public Employee() {
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

    @JsonGetter("birthDate")
    public String getBirthDateString() {
        return birthDate != null ? birthDate.format(DateTimeFormatter.ISO_LOCAL_DATE) : null;
    }

    public Employee setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
        return this;
    }

    @JsonSetter("birthDate")
    public void setBirthDate(String birthDate) {
        if(birthDate == null) this.birthDate = null;
         else this.birthDate = LocalDate.parse(birthDate, DateTimeFormatter.ISO_LOCAL_DATE);
    }

    public String getPersonalNumber() {
        return personalNumber;
    }

    public Employee setPersonalNumber(String personalNumber) {
        this.personalNumber = personalNumber;
        return this;
    }
}
