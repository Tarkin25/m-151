import Department from "../../models/Department";
import DepartmentAction, {LOAD_DEPARTMENTS} from "./departmentActionTypes";
import {ThunkAction} from "redux-thunk";
import {RootAction, RootState} from "../rootReducer";
import departmentService from "../../services/departmentService";

const load: (departments: Department[]) => DepartmentAction = departments => ({
    type: LOAD_DEPARTMENTS,
    payload: {
        departments
    }
})

export const loadDepartments: () => ThunkAction<Promise<void>, RootState, void, RootAction> = () => (dispatch, getState) => {
    const state = getState();

    if(!state.departments.loaded) {
        return departmentService.findAll()
            .then(res => res.data)
            .then(departments => {
                dispatch(load(departments))
            })
    } else {
        return Promise.resolve();
    }
}