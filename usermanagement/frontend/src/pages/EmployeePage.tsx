import React from 'react'
import EmployeeTable from '../components/EmployeeTable';
import {TableContainer} from "@material-ui/core";
import EmployeeActionBar from "../components/EmployeeActionBar";

const EmployeePage = () => {

    return (
        <TableContainer>
            <EmployeeActionBar />
            <EmployeeTable/>
        </TableContainer>
    )
}

export default EmployeePage
