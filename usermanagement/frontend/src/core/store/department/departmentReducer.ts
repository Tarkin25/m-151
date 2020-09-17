import Department from "../../models/Department";
import DepartmentAction, { LOAD_DEPARTMENTS } from "./departmentActionTypes";

type DepartmentState = {
    all: Department[],
    loaded: boolean
}

const initialState: DepartmentState = {
    all: [],
    loaded: false
}

const departmentReducer: (state: DepartmentState | undefined, action: DepartmentAction) => DepartmentState = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEPARTMENTS:
            return {
                ...state,
                all: action.payload.departments,
                loaded: true
            }
        default:
            return state;
    }
}

export default departmentReducer;