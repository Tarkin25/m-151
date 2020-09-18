import React from 'react'
import {useSelector} from "react-redux";
import Job from "../core/models/Job";
import {IconButton, makeStyles, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import useThunkDispatch from "../hooks/useThunkDispatch";
import {deleteEmployee, editEmployee} from "../core/store/employee/employeeActions";
import {selectEmployee} from "../core/store/employee/employeeSelectors";
import Department from '../core/models/Department';
import moment from 'moment';

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

const useStyle = makeStyles(theme => ({
    editButton: {
        
    },
    deleteButton: {
        color: theme.palette.error.main
    }
}))

const EmployeeTableRow = (props: EmployeeTableRowProps) => {

    const classes = useStyle();

    const {
        id,
        firstName,
        lastName,
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
                {email}
            </TableCell>
            <TableCell>
                {ahvNumber}
            </TableCell>
            <TableCell>
                {moment(birthDate).format("DD.MM.YYYY")} 
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
                <IconButton title="Edit" className={classes.editButton} size={"small"} onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton title="Delete" className={classes.deleteButton} size={"small"} onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )

}

export default EmployeeTableRow