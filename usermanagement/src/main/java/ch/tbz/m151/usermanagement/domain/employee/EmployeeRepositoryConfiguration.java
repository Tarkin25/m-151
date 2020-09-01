package ch.tbz.m151.usermanagement.domain.employee;

import ch.tbz.m151.usermanagement.data.DatasourceProperties;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;

import static ch.tbz.m151.usermanagement.data.ConnectionConfiguration.MARIADB;
import static ch.tbz.m151.usermanagement.data.ConnectionConfiguration.POSTGRESQL;

@Configuration
public class EmployeeRepositoryConfiguration {

    private final DatasourceProperties datasourceProperties;
    private final Connection connection;

    @Autowired
    public EmployeeRepositoryConfiguration(DatasourceProperties datasourceProperties, Connection connection) {
        this.datasourceProperties = datasourceProperties;
        this.connection = connection;
    }

    @Bean
    public EmployeeRepository employeeRepository(Logger logger) {
        switch (datasourceProperties.getType()) {
            case MARIADB:
                return new MariaDBEmployeeRepository(logger, connection);
            case POSTGRESQL:
                return new PostgresEmployeeRepository(logger, connection);
            default:
                throw new IllegalStateException(String.format("EmployeeRepository for datasource type '%s' not supported", datasourceProperties.getType()));
        }
    }

}
