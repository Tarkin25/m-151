import Department from "../../models/Department";

export const LOAD_DEPARTMENTS = 'LOAD_DEPARTMENTS'

type LoadDepartments = {
    type: typeof LOAD_DEPARTMENTS
    payload: {
        departments: Department[]
    }
}

type DepartmentAction = LoadDepartments

export default DepartmentAction