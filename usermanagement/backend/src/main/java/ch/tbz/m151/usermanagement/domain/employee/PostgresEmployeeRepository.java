package ch.tbz.m151.usermanagement.domain.employee;

import org.slf4j.Logger;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class PostgresEmployeeRepository extends AbstractEmployeeRepository {

    public PostgresEmployeeRepository(Logger logger, Connection connection) {
        super(logger, connection);
    }

    @Override
    protected PreparedStatement prepareInsert() throws Exception {
        return connection.prepareStatement("call insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    }

    @Override
    protected PreparedStatement prepareUpdate() throws Exception {
        return connection.prepareStatement("call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    }

    @Override
    protected PreparedStatement prepareDelete() throws Exception {
        return connection.prepareStatement("call delete_employee(?)");
    }

}
