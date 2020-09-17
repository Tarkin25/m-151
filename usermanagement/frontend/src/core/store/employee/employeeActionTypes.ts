import Employee from "../../models/Employee";

export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE'
export const STOP_EDIT_EMPLOYEE = 'STOP_EDIT_EMPLOYEE'

type LoadEmployees = {
    type: typeof LOAD_EMPLOYEES,
    payload: {
        employees: Employee[]
    }
}

type AddEmployee = {
    type: typeof ADD_EMPLOYEE
    payload: {
        employee: Employee
    }
}

type UpdateEmployee = {
    type: typeof UPDATE_EMPLOYEE
    payload: {
        id: string,
        employee: Employee
    }
}

type DeleteEmployee = {
    type: typeof DELETE_EMPLOYEE
    payload: {
        id: string
    }
}

type EditEmployee = {
    type: typeof EDIT_EMPLOYEE
    payload: {
        id: string
    }
}

type StopEditEmployee = {
    type: typeof STOP_EDIT_EMPLOYEE
}

type EmployeeAction = LoadEmployees | AddEmployee | UpdateEmployee | DeleteEmployee | EditEmployee | StopEditEmployee;

export default EmployeeAction;