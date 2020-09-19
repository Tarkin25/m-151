import { AxiosResponse } from "axios";
import api from "../../config/api";
import Employee from "../models/Employee";
import { CRUDService, CRUDServiceImpl } from "./serviceGenerics";

interface EmployeeService extends CRUDService<Employee> {

    isAhvNumberAvailable: (ahvNumber: string, excludeId?: string) => Promise<boolean>

    isPersonalNumberAvailable: (personalNumber: string, excludeId?: string) => Promise<boolean>

}

type EmployeeResponse = AxiosResponse<Employee> | AxiosResponse<Employee[]>

const isEmployee = (value: any): value is Employee => {
    if((value as Employee).id) {
        return true;
    } else return false;
}

const prepareEmployee = (employee: Employee) => {
    let job = employee.job

    if(!job) {
        job = {
            id: -1,
            name: ""
        }
    }

    return {
        ...employee,
        job
    }
}

const prepareResponse = <T extends EmployeeResponse>(response: T): T => {
    if(isEmployee(response.data)) {
        return {
            ...response,
            data: prepareEmployee(response.data)
        }
    } else {
        return {
            ...response,
            data: response.data.map(prepareEmployee)
        }
    }
}

class EmployeeServiceImpl implements EmployeeService {

    private baseService: CRUDService<Employee> = new CRUDServiceImpl("/employees")

    findAll = () => this.baseService.findAll().then(prepareResponse)

    findById = (id: string) => this.baseService.findById(id).then(prepareResponse)

    create = (employee: Employee) => this.baseService.create(employee).then(prepareResponse)

    updateById = (id: string, employee: Employee) => this.baseService.updateById(id, employee).then(prepareResponse)

    deleteById = this.baseService.deleteById

    isAhvNumberAvailable = (ahvNumber: string, excludeId?: string) => {
        let url = `/employees/exists?ahvNumber=${ahvNumber}`;

        if(excludeId) {
            url += `&excludeId=${excludeId}`
        }

        return api.get<boolean>(url).then(res => !res.data)
    }

    isPersonalNumberAvailable = (personalNumber: string, excludeId?: string) => {
        let url = `/employees/exists?personalNumber=${personalNumber}`

        if(excludeId) {
            url += `&excludeId=${excludeId}`
        }

        return api.get<boolean>(url).then(res => !res.data)
    }

}

const employeeService: EmployeeService = new EmployeeServiceImpl();

export default employeeService;