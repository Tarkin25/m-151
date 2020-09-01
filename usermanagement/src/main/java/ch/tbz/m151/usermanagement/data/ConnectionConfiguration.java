package ch.tbz.m151.usermanagement.data;

import org.mariadb.jdbc.MariaDbDataSource;
import org.postgresql.PGProperty;
import org.postgresql.ds.PGSimpleDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;

@Configuration
public class ConnectionConfiguration {

    public static final String MARIADB = "mariadb";
    public static final String POSTGRESQL = "postgresql";

    @Bean
    public Connection connection(DatasourceProperties properties) throws Exception {

        DataSource dataSource;

        switch (properties.getType()) {
            case MARIADB:
                dataSource = new MariaDbDataSource(properties.getHost(), properties.getPort(), properties.getDatabase());
                break;
            case POSTGRESQL:
                PGSimpleDataSource pgDataSource = new PGSimpleDataSource();
                pgDataSource.setProperty(PGProperty.PG_DBNAME, properties.getDatabase());
                pgDataSource.setProperty(PGProperty.PG_HOST, properties.getHost());
                pgDataSource.setProperty(PGProperty.PG_PORT, Integer.toString(properties.getPort()));

                dataSource = pgDataSource;
                break;
            default:
                throw new IllegalStateException(String.format("Connection of type '%s' not supported", properties.getType()));
        }

        return dataSource.getConnection(properties.getUsername(), properties.getPassword());
    }

}
