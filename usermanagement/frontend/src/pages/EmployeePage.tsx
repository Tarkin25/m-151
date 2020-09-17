import React from 'react'
import EmployeeTable from '../components/EmployeeTable';
import {TableContainer} from "@material-ui/core";
import EmployeeActionBar from "../components/EmployeeActionBar";
import EditEmployeeDialog from '../components/EditEmployeeDialog';

const EmployeePage = () => {

    return (
        <TableContainer>
            <EmployeeActionBar />
            <EmployeeTable/>
            <EditEmployeeDialog />
        </TableContainer>
    )
}

export default EmployeePage
