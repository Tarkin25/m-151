import {combineReducers} from "redux";
import employeeReducer from "./employee/employeeReducer";
import EmployeeAction from "./employee/employeeActionTypes";
import departmentReducer from "./department/departmentReducer";
import DepartmentAction from "./department/departmentActionTypes";

const rootReducer = combineReducers({
    employees: employeeReducer,
    departments: departmentReducer
})

export type RootAction = EmployeeAction | DepartmentAction

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer