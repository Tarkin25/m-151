package ch.tbz.m151.usermanagement.domain.employee;

import org.slf4j.Logger;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.time.LocalDate;
import java.util.Collection;

public abstract class AbstractEmployeeRepository implements EmployeeRepository {

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
        return null; //TODO
    }

    @Override
    public final Employee create(Employee employee) {
        try {
            PreparedStatement ps = prepareInsert();
            ps.setString(1, employee.getId());
            ps.setString(2, employee.getFirstName());
            ps.setString(3, employee.getLastName());
            ps.setString(4, employee.getPassword());
            ps.setString(5, employee.getEmail());
            ps.setString(6, employee.getAhvNumber());
            ps.setDate(7, Date.valueOf(employee.getBirthDate()));
            ps.setString(8, employee.getPersonalNumber());
            ps.setString(9, employee.getDepartment().getId());

            if(employee.getJob() != null) {
                ps.setString(10, employee.getJob().getId());
            } else {
                ps.setString(10, null);
            }

            ps.execute();

            return employee;
        } catch (Exception e) {
            logger.error("Error while calling insert procedure", e);
            return null;
        }
    }

    @Override
    public final Employee update(Employee employee) {
        try {
            PreparedStatement ps = prepareUpdate();
            ps.setString(1, employee.getId());
            ps.setString(2, employee.getFirstName());
            ps.setString(3, employee.getLastName());
            ps.setString(4, employee.getPassword());
            ps.setString(5, employee.getEmail());
            ps.setString(6, employee.getAhvNumber());
            ps.setDate(7, Date.valueOf(employee.getBirthDate()));
            ps.setString(8, employee.getPersonalNumber());
            ps.setString(9, employee.getDepartment().getId());
            ps.setString(10, employee.getJob().getId());

            ps.execute();

            return employee;
        } catch (Exception e) {
            logger.error("Error while calling update procedure", e);
            return null;
        }
    }

    @Override
    public final void deleteById(String id) {
        try {
            PreparedStatement ps = prepareDelete();
            ps.setString(1, id);

            ps.execute();
        } catch (Exception e) {
            logger.error("Error while calling delete procedure", e);
        }
    }
}