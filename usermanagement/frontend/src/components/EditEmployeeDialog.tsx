import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import Employee, { employeeSchema } from "../core/models/Employee";
import { stopEditEmployee, updateEmployee } from "../core/store/employee/employeeActions";
import { selectSelectedEmployee } from "../core/store/employee/employeeSelectors";
import useThunkDispatch from "../hooks/useThunkDispatch";
import EmployeeFields from "./EmployeeFields";

const useStyle = makeStyles(theme => ({
    actions: {
        padding: theme.spacing(1, 3)
    }
}))

const EditEmployeeDialog = () => {
    const classes = useStyle();

    const dispatch = useThunkDispatch();
    const employee = useSelector(selectSelectedEmployee);

    const handleClose = () => {
        dispatch(stopEditEmployee());
    };

    const handleSubmit = (employee: Employee) => {
        dispatch(updateEmployee(employee))
        .then(handleClose);
    };

    if(employee) {
        return (
            <Dialog open onClose={handleClose}>
                <DialogTitle>
                    Edit {employee.firstName} {employee.lastName}
                </DialogTitle>
                <Formik initialValues={employee} onSubmit={handleSubmit} validationSchema={employeeSchema(employee.id)}>
                    <Form>
                        <DialogContent>
                            <EmployeeFields />
                        </DialogContent>
                        <DialogActions className={classes.actions}>
                            <Button onClick={handleClose} variant="outlined" color="primary">Cancel</Button>
                            <Button type="submit" variant="contained" color="primary">Save</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
        )
    } else return null
};

export default EditEmployeeDialog;
