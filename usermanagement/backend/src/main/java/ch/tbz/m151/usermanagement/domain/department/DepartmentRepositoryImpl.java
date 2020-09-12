package ch.tbz.m151.usermanagement.domain.department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;

@Repository
public class DepartmentRepositoryImpl implements DepartmentRepository {

    private static final String SELECT_DEPARTMENT = "select * from department";
    private static final String SELECT_DEPARTMENT_BY_ID = SELECT_DEPARTMENT + " where id = ?";

    private final Connection connection;

    @Autowired
    public DepartmentRepositoryImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public Collection<Department> findAll() {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_DEPARTMENT);

            ResultSet rs = ps.executeQuery();

            Collection<Department> departments = new ArrayList<>(rs.getFetchSize());

            while(rs.next()) {
                departments.add(new Department(rs.getString("id"), rs.getString("name")));
            }

            return departments;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Department findById(String id) {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_DEPARTMENT_BY_ID);
            ps.setString(1, id);

            ResultSet rs = ps.executeQuery();

            if(rs.next()) {
                return new Department(rs.getString("id"), rs.getString("name"));
            } else {
                return null;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
