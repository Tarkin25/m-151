import Department from "./Department";
import DomainEntity from "./DomainEntity";
import Job from "./Job";
import * as yup from 'yup';
import moment from 'moment';

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

const requiredMessage = "Required"

export const employeeSchema = yup.object({
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    email: yup.string().email("Must be a valid email"),
    ahvNumber: yup.string().required(requiredMessage).matches(/[0-9]{3}\.[0-9]{4}\.[0-9]{4}\.[0-9]{2}/, "Must be of format xxx.xxxx.xxxx.xx"),
    birthDate: yup.string().required(requiredMessage).test("birthDateTest", "Must be in the past", value => {
        if(value) {
            return moment(value).isBefore(moment())
        }

        return false
    }),
    personalNumber: yup.string().required(requiredMessage),
    department: yup.object({
        id: yup.mixed().notOneOf([-1], "Required")
    }).required(requiredMessage),
    job: yup.object({
        id: yup.string().required()
    })
})

export default Employee