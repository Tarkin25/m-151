create or replace procedure insert_employee(in id char(36), in first_name varchar(255), in last_name varchar(255),
                                            in password varchar(255), in email varchar(255), in ahv_number char(16),
                                            in birth_date date, in personal_number char(36), in department_id char(36),
                                            in job_id char(36)) language plpgsql as
$$
begin
    insert into employee(id, first_name, last_name, password, email, ahv_number, birth_date, personal_number,
                         department_id, job_id) values (id, first_name, last_name, password, email, ahv_number,
                                                       birth_date, personal_number, department_id, job_id);
end;
$$;
create or replace procedure update_employee(in e_id char(36), in first_name varchar(255), in last_name varchar(255),
                                            in password varchar(255), in email varchar(255), in ahv_number char(16),
                                            in birth_date date, in personal_number char(36), in department_id char(36),
                                            in job_id char(36)) language plpgsql as
$$
begin
    update employee
    set first_name      = first_name,
        last_name       = last_name,
        password        = password,
        email           = email,
        ahv_number      = ahv_number,
        birth_date      = birth_date,
        personal_number = personal_number,
        department_id   = department_id,
        job_id          = job_id
    where id = e_id;
end;
$$;

create or replace procedure delete_employee(in e_id char(36)) language plpgsql as
$$
begin
    delete from employee where id = e_id;
end;
$$;