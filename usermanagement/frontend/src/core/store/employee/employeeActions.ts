import Employee from "../../models/Employee";
import EmployeeAction, {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    EDIT_EMPLOYEE,
    LOAD_EMPLOYEES,
    STOP_EDIT_EMPLOYEE,
    UPDATE_EMPLOYEE
} from "./employeeActionTypes";
import {ThunkAction} from "redux-thunk";
import employeeService from "../../services/employeeService";
import {RootAction, RootState} from "../rootReducer";

const load: (employees: Employee[]) => EmployeeAction = employees => ({
    type: LOAD_EMPLOYEES,
    payload: {
        employees
    }
})

const add: (employee: Employee) => EmployeeAction = employee => ({
    type: ADD_EMPLOYEE,
    payload: {
        employee
    }
})

const update: (id: string, employee: Employee) => EmployeeAction = (id, employee) => ({
    type: UPDATE_EMPLOYEE,
    payload: {
        id, employee
    }
})

const delete_: (id: string) => EmployeeAction = id => ({
    type: DELETE_EMPLOYEE,
    payload: {
        id
    }
})

export const editEmployee: (id: string) => EmployeeAction = id => ({
    type: EDIT_EMPLOYEE,
    payload: {
        id
    }
})

export const stopEditEmployee: () => EmployeeAction = () => ({
    type: STOP_EDIT_EMPLOYEE
})

export const loadEmployees: () => ThunkAction<Promise<void>, RootState, void, RootAction> = () => (dispatch, getState) => {
    const state = getState();

    if(!state.employees.loaded) {
        return employeeService.findAll()
            .then(res => res.data)
            .then(employees => {
                dispatch(load(employees));
            })
    } else {
        return Promise.resolve();
    }
}

export const createEmployee: (employee: Employee) => ThunkAction<Promise<void>, RootState, void, RootAction> = (employee) => dispatch => {
    return employeeService.create(employee)
        .then(res => res.data)
        .then(employee => {
            dispatch(add(employee))
        })
}

export const updateEmployee: (employee: Employee) => ThunkAction<Promise<void>, RootState, void, RootAction> = (employee) => dispatch => {
    return employeeService.updateById(employee.id!, employee)
        .then(res => res.data)
        .then(employee => {
            dispatch(update(employee.id!, employee))
        })
}

export const deleteEmployee: (id: string) => ThunkAction<Promise<void>, RootState, void, RootAction> = id => dispatch => {
    return employeeService.deleteById(id)
        .then(() => {
            dispatch(delete_(id))
        })
}