delimiter //

create trigger insert_employee_trigger
    after insert
    on employee
    for each row
begin
    insert into employee_log(date, email, function) value (current_date, new.email, 'insert');
end//

create trigger update_employee_trigger
    after update
    on employee
    for each row
begin
    insert into employee_log(date, email, function) value (current_date, new.email, 'update');
end //

create trigger delete_employee_trigger
    before delete
    on employee
    for each row
begin
    insert into employee_log(date, email, function) value (current_date, old.email, 'delete');
end //

delimiter ;