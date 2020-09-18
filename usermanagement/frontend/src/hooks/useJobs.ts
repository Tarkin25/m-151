import { useEffect } from "react";
import { useSelector } from "react-redux"
import { loadJobs } from "../core/store/job/jobActions";
import { RootState } from "../core/store/rootReducer"
import useThunkDispatch from "./useThunkDispatch";

const useJobs = () => {
    const jobs = useSelector((state: RootState) => state.jobs.all)
    const dispatch = useThunkDispatch();

    useEffect(() => {
        dispatch(loadJobs())
    }, [dispatch])

    return jobs;
}

export default useJobs