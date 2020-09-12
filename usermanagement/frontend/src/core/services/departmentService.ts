import Department from "../models/Department";
import { ReadService, ReadServiceImpl } from "./serviceGenerics";

interface DepartmentService extends ReadService<Department> {

}

const departmentService: DepartmentService = new ReadServiceImpl("/departments");

export default departmentService;