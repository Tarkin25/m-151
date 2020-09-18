import { useEffect } from "react";
import { useSelector } from "react-redux"
import { loadDepartments } from "../core/store/department/departmentActions";
import { RootState } from "../core/store/rootReducer"
import useThunkDispatch from "./useThunkDispatch";

const useDepartments = () => {
    const departments = useSelector((state: RootState) => state.departments.all);
    const dispatch = useThunkDispatch();

    useEffect(() => {
        dispatch(loadDepartments());
    }, [dispatch])

    return departments;
}

export default useDepartments;