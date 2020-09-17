import React from 'react'
import {useSelector} from "react-redux";
import Job from "../core/models/Job";
import {IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useThunkDispatch from "../hooks/useThunkDispatch";
import {deleteEmployee, editEmployee} from "../core/store/employee/employeeActions";
import {selectEmployee} from "../core/store/employee/employeeSelectors";
import Department from '../core/models/Department';

type EmployeeTableRowProps = {
    id: string
}

const emptyJob: Job = {
    id: undefined!,
    name: "-",
    description: "-"
}

const emptyDepartment: Department = {
    id: undefined!,
    name: "-"
}

const EmployeeTableRow = (props: EmployeeTableRowProps) => {

    const {
        id,
        firstName,
        lastName,
        username,
        email,
        ahvNumber,
        birthDate,
        personalNumber,
        department: {
            name: departmentName
        } = emptyDepartment,
        job: {
            name: jobName,
            description: jobDescription
        } = emptyJob
    } = useSelector(selectEmployee(props))

    const dispatch = useThunkDispatch();

    const handleEdit = () => {
        dispatch(editEmployee(id!))
    }

    const handleDelete = () => {
        dispatch(deleteEmployee(id!))
    }

    return (
        <TableRow>
            <TableCell>
                {firstName}
            </TableCell>
            <TableCell>
                {lastName}
            </TableCell>
            <TableCell>
                {username}
            </TableCell>
            <TableCell>
                {email}
            </TableCell>
            <TableCell>
                {ahvNumber}
            </TableCell>
            <TableCell>
                {birthDate}
            </TableCell>
            <TableCell>
                {personalNumber}
            </TableCell>
            <TableCell>
                {departmentName}
            </TableCell>
            <TableCell>
                {jobName}
            </TableCell>
            <TableCell>
                {jobDescription}
            </TableCell>
            <TableCell>
                <IconButton size={"small"} onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton size={"small"} onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )

}

export default EmployeeTableRow