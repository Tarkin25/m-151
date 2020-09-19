package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.domain.department.Department;
import ch.tbz.m151.usermanagement.domain.job.Job;
import org.slf4j.Logger;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;

public abstract class AbstractEmployeeRepository implements EmployeeRepository {

    private static final String SELECT_EMPLOYEE = "select e.*, j.name as job_name, j.description as job_description, d.name as department_name\n" +
            "from employee e\n" +
            "         left join job j on e.job_id = j.id\n" +
            "         join department d on e.department_id = d.id";

    private static final String SELECT_EMPLOYEE_BY_ID = SELECT_EMPLOYEE + " where e.id = ?";

    private static final String SELECT_EXISTS_BY_AHV_NUMBER = "select count(*) > 0 as exists from employee where ahv_number = ?";

    private static final String SELECT_EXISTS_BY_PERSONAL_NUMBER = "select count(*) > 0 as exists from employee where personal_number = ?";

    protected final Logger logger;
    protected final Connection connection;

    public AbstractEmployeeRepository(Logger logger, Connection connection) {
        this.logger = logger;
        this.connection = connection;
    }

    protected abstract PreparedStatement prepareInsert() throws Exception;

    protected abstract PreparedStatement prepareUpdate() throws Exception;

    protected abstract PreparedStatement prepareDelete() throws Exception;

    @Override
    public final Collection<Employee> findAll() {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_EMPLOYEE);

            ResultSet resultSet = ps.executeQuery();

            Collection<Employee> employees = new ArrayList<>(resultSet.getFetchSize());

            while(resultSet.next()) {
                employees.add(mapResultSetToEmployee(resultSet));
            }

            return employees;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Employee findById(String id) {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_EMPLOYEE_BY_ID);
            ps.setString(1, id);

            ResultSet resultSet = ps.executeQuery();

            if(resultSet.next()) {
                return mapResultSetToEmployee(resultSet);
            } else {
                return null;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private Employee mapResultSetToEmployee(ResultSet rs) throws Exception {
        Employee employee = new Employee()
                .setId(rs.getString("id"))
                .setFirstName(rs.getString("first_name"))
                .setLastName(rs.getString("last_name"))
                .setEmail(rs.getString("email"))
                .setAhvNumber(rs.getString("ahv_number"))
                .setBirthDate(rs.getDate("birth_date").toLocalDate())
                .setPersonalNumber(rs.getString("personal_number"));

        String departmentId = rs.getString("department_id");
        String departmentName = rs.getString("department_name");

        if(departmentId != null) {
            employee.setDepartment(new Department(departmentId, departmentName));
        }

        String jobId = rs.getString("job_id");
        String jobName = rs.getString("job_name");
        String jobDescription = rs.getString("job_description");

        if(jobId != null) {
            employee.setJob(new Job(jobId, jobName, jobDescription));
        }

        return employee;
    }

    @Override
    public final Employee create(Employee employee) {
        try {
            PreparedStatement ps = prepareInsert();
            populatePreparedStatement(ps, employee);
            ps.execute();

            return employee;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public final Employee update(Employee employee) {
        try {
            PreparedStatement ps = prepareUpdate();
            populatePreparedStatement(ps ,employee);
            ps.execute();

            return employee;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void populatePreparedStatement(PreparedStatement ps, Employee employee) throws SQLException {
        ps.setString(1, employee.getId());
        ps.setString(2, employee.getFirstName());
        ps.setString(3, employee.getLastName());
        ps.setString(4, employee.getEmail());
        ps.setString(5, employee.getAhvNumber());
        ps.setDate(6, Date.valueOf(employee.getBirthDate()));
        ps.setString(7, employee.getPersonalNumber());
        ps.setString(8, employee.getDepartment().getId());
        if(employee.getJob() != null) {
            ps.setString(9, employee.getJob().getId());
        } else {
            ps.setString(9, null);
        }
    }

    @Override
    public final void deleteById(String id) {
        try {
            PreparedStatement ps = prepareDelete();
            ps.setString(1, id);

            ps.execute();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean existsByAhvNumber(String ahvNumber, String excludeId) {
        return exists(SELECT_EXISTS_BY_AHV_NUMBER, ahvNumber, excludeId);
    }

    @Override
    public boolean existsByPersonalNumber(String personalNumber, String excludeId) {
        return exists(SELECT_EXISTS_BY_PERSONAL_NUMBER, personalNumber, excludeId);
    }

    private boolean exists(String sql, String value, String excludeId) {
        try {
            if(excludeId != null) {
                sql += " and id != ?";
            }

            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setString(1, value);

            if(excludeId != null) {
                ps.setString(2, excludeId);
            }

            ResultSet rs = ps.executeQuery();
            rs.next();

            return rs.getBoolean("exists");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}