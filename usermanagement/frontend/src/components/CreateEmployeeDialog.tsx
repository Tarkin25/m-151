import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import Employee from '../core/models/Employee'
import { createEmployee } from '../core/store/employee/employeeActions'
import useThunkDispatch from '../hooks/useThunkDispatch'
import EmployeeFields from './EmployeeFields'

const useStyle = makeStyles(theme => ({
    actions: {
        padding: theme.spacing(1, 3)
    }
}))

type CreateEmployeeDialogProps = {
    open: boolean,
    onClose: () => void
}

const emptyEmployee: Employee = {
    id: undefined!,
    firstName: "",
    lastName: "",
    password: "",
    username: "",
    email: "",
    ahvNumber: "",
    birthDate: undefined,
    personalNumber: "",
    department: undefined,
    job: undefined
}

const CreateEmployeeDialog = (props: CreateEmployeeDialogProps) => {

    const {onClose} = props;

    const classes = useStyle();

    const dispatch = useThunkDispatch();

    const handleSubmit = (employee: Employee) => {
        dispatch(createEmployee(employee))
        onClose();
    }

    return (
        <Dialog
            {...props}
        >
            <DialogTitle>Create new employee</DialogTitle>
            <Formik
                initialValues={emptyEmployee}
                onSubmit={handleSubmit}
            >
                <Form>
                    <DialogContent>
                        <EmployeeFields />
                    </DialogContent>
                    <DialogActions className={classes.actions}>
                        <Button color="primary" variant="outlined" onClick={onClose}>Cancel</Button>
                        <Button color="primary" variant="contained" type="submit">Save</Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    )
}

export default CreateEmployeeDialog
