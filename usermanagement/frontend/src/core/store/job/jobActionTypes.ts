import Job from "../../models/Job"

export const LOAD_JOBS = 'LOAD_JOBS'

type LoadJobs = {
    type: typeof LOAD_JOBS
    payload: {
        jobs: Job[]
    }
}

export type JobAction = LoadJobs