import DomainEntity from "./DomainEntity";

type Job = DomainEntity & {
    name: string
    description?: string
}

export default Job