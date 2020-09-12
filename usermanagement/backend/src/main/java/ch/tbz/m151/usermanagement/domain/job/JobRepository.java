package ch.tbz.m151.usermanagement.domain.job;

import java.util.Collection;

public interface JobRepository {

    Collection<Job> findAll();

    Job findById(String id);

}
