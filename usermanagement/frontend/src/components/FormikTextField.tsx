import React, { FunctionComponent } from 'react'
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldHookConfig, useField } from 'formik';

type FormikTextFieldProps = TextFieldProps & FieldHookConfig<any>

const FormikTextField: FunctionComponent<FormikTextFieldProps> = (props: FormikTextFieldProps) => {

    const [field, meta] = useField(props);

    const errorText = (meta.touched && meta.error) ? meta.error : undefined;

    return (
        <TextField {...props} {...field} error={!!errorText} helperText={errorText || props.helperText} />
    )
}

FormikTextField.defaultProps = {
    variant: "outlined",
    fullWidth: true,
    color: "primary"
}

export default FormikTextField