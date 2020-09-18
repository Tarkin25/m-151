insert into department (id, name)
values ('11111-11111-11111-11111-11111-11111-', 'Finances'),
       ('22222-22222-22222-22222-22222-22222-', 'Human Resources'),
       ('33333-33333-33333-33333-33333-33333-', 'Marketing');

insert into job (id, name, description)
values ('11111-11111-11111-11111-11111-11111-', 'Chief Executive Officer', 'Very important'),
       ('22222-22222-22222-22222-22222-22222-', 'Janitor', null),
       ('33333-33333-33333-33333-33333-33333-', 'Recruiter', 'Hires new employees');

insert into employee (id, first_name, last_name, email, ahv_number, birth_date, personal_number, department_id, job_id)
values ('11111-11111-11111-11111-11111-11111-', 'John', 'Doe', 'john.doe@example.com', '111.1111.1111.11', '1212-12-12', '11111-11111-11111-11111-11111-11111-', '22222-22222-22222-22222-22222-22222-', '33333-33333-33333-33333-33333-33333-');