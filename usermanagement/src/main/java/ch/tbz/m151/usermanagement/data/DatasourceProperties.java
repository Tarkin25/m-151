package ch.tbz.m151.usermanagement.data;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("datasource")
public class DatasourceProperties {

    private String username;
    private String password;
    private String type;
    private String host;
    private int port;
    private String database;

    public String getUsername() {
        return username;
    }

    public DatasourceProperties setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public DatasourceProperties setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getType() {
        return type;
    }

    public DatasourceProperties setType(String type) {
        this.type = type;
        return this;
    }

    public String getHost() {
        return host;
    }

    public DatasourceProperties setHost(String host) {
        this.host = host;
        return this;
    }

    public int getPort() {
        return port;
    }

    public DatasourceProperties setPort(int port) {
        this.port = port;
        return this;
    }

    public String getDatabase() {
        return database;
    }

    public DatasourceProperties setDatabase(String database) {
        this.database = database;
        return this;
    }
}
