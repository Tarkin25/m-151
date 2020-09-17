import {normalizeArray, StringMap} from '../../util'
import Employee from '../../models/Employee'
import EmployeeAction, {ADD_EMPLOYEE, EDIT_EMPLOYEE, LOAD_EMPLOYEES, STOP_EDIT_EMPLOYEE, UPDATE_EMPLOYEE} from "./employeeActionTypes";

export type EmployeeState = {
    byId: StringMap<Employee>,
    allIds: string[],
    selectedId?: string,
    loaded: boolean
}

const initialState: EmployeeState = {
    byId: {},
    allIds: [],
    selectedId: undefined,
    loaded: false
}

const employeeReducer: (state: EmployeeState | undefined, action: EmployeeAction) => EmployeeState = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEES:
            return {
                ...state,
                ...normalizeArray(action.payload.employees),
                loaded: true
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                allIds: [...state.allIds, action.payload.employee.id],
                byId: {
                    ...state.byId,
                    [action.payload.employee.id]: action.payload.employee
                }
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.id]: action.payload.employee
                }
            }
        case EDIT_EMPLOYEE:
            return {
                ...state,
                selectedId: action.payload.id
            }
        case STOP_EDIT_EMPLOYEE:
            return {
                ...state,
                selectedId: undefined
            }
        default:
            return state;
    }
}

export default employeeReducer;