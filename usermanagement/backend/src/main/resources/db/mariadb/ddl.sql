create table job
(
    id          char(36)     not null unique,
    name        varchar(255) not null,
    description varchar(255),
    constraint pk_job primary key (id)
);

create table department
(
    id   char(36)     not null unique,
    name varchar(255) not null,
    constraint pk_department primary key (id)
);

create table employee
(
    id              char(36)     not null unique,
    first_name      varchar(255) not null,
    last_name       varchar(255) not null,
    email           varchar(255),
    ahv_number      char(16)     not null unique,
    birth_date      date         not null,
    personal_number char(36)     not null unique,
    department_id   char(36)     not null,
    job_id          char(36),
    constraint pk_employee primary key (id),
    constraint fk_employee_department foreign key (department_id) references department (id),
    constraint fk_employee_job foreign key (job_id) references job (id)
);

create table employee_log
(
    date     date         not null,
    email    varchar(255),
    function varchar(255) not null
);