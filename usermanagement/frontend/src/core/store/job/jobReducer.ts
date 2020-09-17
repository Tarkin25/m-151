import Job from "../../models/Job";
import { JobAction, LOAD_JOBS } from "./jobActionTypes";

export type JobState = {
    all: Job[],
    loaded: boolean
}

const initialState: JobState = {
    all: [],
    loaded: false
}

const jobReducer: (state: JobState | undefined, action: JobAction) => JobState = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_JOBS:
            return {
                ...state,
                all: action.payload.jobs,
                loaded: true
            }
        default:
            return state;
    }
}

export default jobReducer;