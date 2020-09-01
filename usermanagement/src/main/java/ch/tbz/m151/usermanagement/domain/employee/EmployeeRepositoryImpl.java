package ch.tbz.m151.usermanagement.domain.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedHashMap;
import java.util.Map;

@Repository
public class EmployeeRepositoryImpl {

    private final Connection connection;

    @Autowired
    public EmployeeRepositoryImpl(Connection connection) {
        this.connection = connection;
    }

    public Map<String, Object> findByUsernameAndPassword(String username, String password) throws Exception {

        Map<String, Object> result = new LinkedHashMap<>();

        PreparedStatement preparedStatement = connection.prepareStatement("select * from employee e where e.username = ? and e.password = ?");
        preparedStatement.setString(1, username);
        preparedStatement.setString(2, password);

        ResultSet resultSet = preparedStatement.executeQuery();

        if(resultSet.next()) {
            Employee employee = new Employee()
                    .setId(resultSet.getString("id"))
                    .setFirstName(resultSet.getString("first_name"))
                    .setLastName(resultSet.getString("last_name"))
                    .setUsername(resultSet.getString("username"))
                    .setPassword(resultSet.getString("password"));

            result.put("user", employee);
            result.put("success", true);
        } else {
            result.put("success", false);
        }

        result.put("database", connection.getMetaData().getDatabaseProductName());

        return result;
    }
}
