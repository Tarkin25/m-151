import { Grid } from "@material-ui/core";
import React from "react";
import FormikTextField from "./FormikTextField";

const EmployeeFields = () => {

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
                <FormikTextField name="firstName" label="Firstname" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="lastName" label="Lastname" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="username" label="Username" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="email" label="Email" type="email" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="ahvNumber" label="AHV Nr." />
            </Grid>
            {/* <Grid item xs={12}>
                {<FormikTextField
                    name="birthDate"
                    label="Firstname"
                />}
            </Grid> */}
            <Grid item xs={12}>
                <FormikTextField
                    name="personalNumber"
                    label="Personal Nr."
                />
            </Grid>
            {/* <Grid item xs={12}>
                <FormikTextField
                    name="department"
                    label="Department"
                />
            </Grid> */}
            {/* <Grid item xs={12}>
                <FormikTextField
                    name="job"
                    label="Job"
                />
            </Grid> */}
        </Grid>
    );
};

export default EmployeeFields;
