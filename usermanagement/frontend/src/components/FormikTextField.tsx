import withField, {FieldProps} from "../high-order/withField";
import React from 'react'
import { TextField, TextFieldProps } from "@material-ui/core";

type FormikTextFieldProps = FieldProps & TextFieldProps

const FormikTextField = withField((props: FormikTextFieldProps) => {

    return (
        <TextField {...props} />
    )
})

export default FormikTextField