package ch.tbz.m151.usermanagement.domain.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository repository;

    @Autowired
    public JobServiceImpl(JobRepository repository) {
        this.repository = repository;
    }

    @Override
    public Collection<Job> findAll() {
        return repository.findAll();
    }

    @Override
    public Job findById(String id) {
        return repository.findById(id);
    }
}
