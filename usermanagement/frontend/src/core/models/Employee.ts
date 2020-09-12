import { Moment } from "moment";
import Department from "./Department";
import DomainEntity from "./DomainEntity";
import Job from "./Job";

type Employee = DomainEntity & {
    firstName: string
    lastName: string
    username: string
    password: string
    email: string
    ahvNumber: string
    birthDate: Moment
    personalNumber: string
    department: Department
    job?: Job
}

export default Employee