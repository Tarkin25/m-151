import { ThunkAction } from "redux-thunk";
import Job from "../../models/Job";
import jobService from "../../services/jobService";
import { RootAction, RootState } from "../rootReducer";
import { JobAction, LOAD_JOBS } from "./jobActionTypes";

const load: (jobs: Job[]) => JobAction = jobs => ({
    type: LOAD_JOBS,
    payload: {
        jobs
    }
})

export const loadJobs: () => ThunkAction<Promise<void>, RootState, void, RootAction> = () => (dispatch, getState) => {
    const state = getState();

    if(!state.jobs.loaded) {
        return jobService.findAll()
            .then(res => res.data)
            .then(jobs => {
                dispatch(load(jobs));
            })
    } else {
        return Promise.resolve();
    }
}