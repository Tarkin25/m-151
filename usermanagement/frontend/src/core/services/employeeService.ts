import Employee from "../models/Employee";
import { CRUDService, CRUDServiceImpl } from "./serviceGenerics";

interface EmployeeService extends CRUDService<Employee> {

}

const employeeService: EmployeeService = new CRUDServiceImpl("/employees");

export default employeeService;