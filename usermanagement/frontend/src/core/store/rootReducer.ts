import {combineReducers} from "redux";
import employeeReducer from "./employee/employeeReducer";
import EmployeeAction from "./employee/employeeActionTypes";
import departmentReducer from "./department/departmentReducer";
import DepartmentAction from "./department/departmentActionTypes";
import jobReducer from "./job/jobReducer";
import { JobAction } from "./job/jobActionTypes";

const rootReducer = combineReducers({
    employees: employeeReducer,
    departments: departmentReducer,
    jobs: jobReducer
})

export type RootAction = EmployeeAction | DepartmentAction | JobAction

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer