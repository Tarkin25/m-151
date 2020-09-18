import Department from "./Department";
import DomainEntity from "./DomainEntity";
import Job from "./Job";

type Employee = DomainEntity & {
    id: string
    firstName: string
    lastName: string
    email?: string
    ahvNumber: string
    birthDate: string
    personalNumber: string
    department?: Department
    job?: Job
}

export default Employee