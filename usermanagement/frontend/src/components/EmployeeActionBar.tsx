import {Dialog, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import React, {useState, Fragment} from "react";
import AddIcon from '@material-ui/icons/Add';
import Employee from "../core/models/Employee";
import {Form, Formik} from "formik";
import EmployeeForm from "./EmployeeForm";
import useThunkDispatch from "../hooks/useThunkDispatch";
import {createEmployee} from "../core/store/employee/employeeActions";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}));

const emptyEmployee: Employee = {
    ahvNumber: "",
    birthDate: undefined!,
    department: {
        id: undefined!,
        name: ""
    },
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    personalNumber: "",
    username: "",
    id: undefined!
}

const EmployeeActionBar = () => {

    const classes = useStyle();

    const dispatch = useThunkDispatch();

    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const handleSubmit = (employee: Employee) => {
        dispatch(createEmployee(employee));
    }

    return (
        <Fragment>
            <Toolbar className={classes.root}>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Toolbar>
            <Dialog
                open={dialogOpen}
                onClose={closeDialog}
            >
                <Formik
                    initialValues={emptyEmployee}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <EmployeeForm />
                    </Form>
                </Formik>
            </Dialog>
        </Fragment>
    )

}

export default EmployeeActionBar