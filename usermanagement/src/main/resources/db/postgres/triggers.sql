create or replace function log_employee_insert() returns trigger language plpgsql as
$$
begin
        insert into employee_log(date, email, function) values (current_date, new.email, 'insert');
        return new;
    end;
$$;

create or replace function log_employee_update() returns trigger language plpgsql as
$$
    begin
        insert into employee_log(date, email, function) values (current_date, new.email, 'update');
        return new;
    end;
$$;

create or replace function log_employee_delete() returns trigger language plpgsql as
    $$
    begin
       insert into employee_log(date, email, function) values (current_date, old.email, 'delete');
       return old;
    end;
    $$;

drop trigger if exists employee_insert_trigger on employee;

create trigger employee_insert_trigger after insert on employee for each row
    execute procedure log_employee_insert();

drop trigger if exists employee_update_trigger on employee;

create trigger employee_update_trigger after update on employee for each row
    execute procedure log_employee_update();

drop trigger if exists employee_delete_trigger on employee;

create trigger employee_delete_trigger before delete on employee for each row
    execute procedure log_employee_delete();