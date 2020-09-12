import React, { useEffect, useState } from 'react'
import EmployeeTable from '../components/organisms/EmployeeTable';
import Employee from '../core/models/Employee'
import employeeService from '../core/services/employeeService';

const EmployeePage = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        employeeService.findAll()
        .then(res => {
            setEmployees(res.data);
            console.log("employees", res.data);
        })
    }, []);

    return (
        <div>
            <EmployeeTable employees={employees} />
        </div>
    )
}

export default EmployeePage
