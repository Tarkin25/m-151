import { Grid, MenuItem } from "@material-ui/core";
import React from "react";
import useDepartments from "../hooks/useDepartments";
import useJobs from "../hooks/useJobs";
import FormikTextField from "./FormikTextField";

const EmployeeFields = () => {

    const departments = useDepartments();
    const jobs = useJobs();

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
                <FormikTextField name="firstName" label="Firstname" autoFocus />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="lastName" label="Lastname" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="email" label="Email" type="email" />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField name="ahvNumber" label="AHV Nr." helperText="Format: xxx.xxxx.xxxx.xx" />
            </Grid>
            <Grid item xs={12}>
                {<FormikTextField
                    name="birthDate"
                    label="Birth date"
                    type="date"
                    InputLabelProps={{
                        shrink: true
                    }}
                />}
            </Grid>
            <Grid item xs={12}>
                <FormikTextField
                    name="personalNumber"
                    label="Personal Nr."
                />
            </Grid>
            <Grid item xs={12}>
                <FormikTextField
                    name="department.id"
                    label="Department"
                    select
                >
                    <MenuItem value={-1} disabled>
                        <em>Please select</em>
                    </MenuItem>
                    {departments.map(department => (
                        <MenuItem key={department.id} value={department.id}>
                            {department.name}
                        </MenuItem>
                    ))}
                </FormikTextField>
            </Grid>
            <Grid item xs={12}>
                <FormikTextField
                    name="job.id"
                    label="Job"
                    select
                >
                    <MenuItem value={-1}>
                        <em>No job</em>
                    </MenuItem>
                    {jobs.map(job => (
                        <MenuItem key={job.id} value={job.id}>
                            {job.name}
                        </MenuItem>
                    ))}
                </FormikTextField>
            </Grid>
        </Grid>
    );
};

export default EmployeeFields;
