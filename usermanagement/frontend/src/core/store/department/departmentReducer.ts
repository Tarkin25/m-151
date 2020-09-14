import Department from "../../models/Department";
import DepartmentAction from "./departmentActionTypes";

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
        default:
            return state;
    }
}

export default departmentReducer;