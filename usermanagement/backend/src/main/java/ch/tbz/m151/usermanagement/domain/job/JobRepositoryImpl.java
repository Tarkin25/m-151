package ch.tbz.m151.usermanagement.domain.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;

@Repository
public class JobRepositoryImpl implements JobRepository {

    private static final String SELECT_JOB = "select * from job";
    private static final String SELECT_JOB_BY_ID = SELECT_JOB + " where id = ?";

    private final Connection connection;

    @Autowired
    public JobRepositoryImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public Collection<Job> findAll() {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_JOB);

            ResultSet rs = ps.executeQuery();

            Collection<Job> jobs = new ArrayList<>(rs.getFetchSize());

            while (rs.next()) {
                jobs.add(new Job(rs.getString("id"), rs.getString("name"), rs.getString("description")));
            }

            return jobs;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Job findById(String id) {
        try {
            PreparedStatement ps = connection.prepareStatement(SELECT_JOB_BY_ID);
            ps.setString(1, id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return new Job(rs.getString("id"), rs.getString("name"), rs.getString("description"));
            } else {
                return null;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
