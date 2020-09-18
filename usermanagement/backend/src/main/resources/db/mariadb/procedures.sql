delimiter //

create or replace procedure insert_employee(in id_arg char(36), in first_name_arg varchar(255),
                                            in last_name_arg varchar(255),
                                            in email_arg varchar(255), in ahv_number_arg char(16),
                                            in birth_date_arg date, in personal_number_arg char(36),
                                            in department_id_arg char(36), in job_id_arg char(36))
begin
    insert into employee(id, first_name, last_name, email, ahv_number, birth_date, personal_number,
                         department_id, job_id) value (id_arg, first_name_arg, last_name_arg, email_arg,
                                                       ahv_number_arg, birth_date_arg, personal_number_arg,
                                                       department_id_arg, job_id_arg);
end //

create or replace procedure update_employee(in id_arg char(36), in first_name_arg varchar(255),
                                            in last_name_arg varchar(255),
                                            in email_arg varchar(255), in ahv_number_arg char(16),
                                            in birth_date_arg date, in personal_number_arg char(36),
                                            in department_id_arg char(36), in job_id_arg char(36))
begin
    update employee
    set first_name      = first_name_arg,
        last_name       = last_name_arg,
        email           = email_arg,
        ahv_number      = ahv_number_arg,
        birth_date      = birth_date_arg,
        personal_number = personal_number_arg,
        department_id   = department_id_arg,
        job_id          = job_id_arg
    where id = id_arg;
end //

create or replace procedure delete_employee(in id_arg char(36))
begin
    delete from employee where id = id_arg;
end //