import { FieldHelperProps, FieldInputProps, FieldMetaProps, useField } from "formik";
import { FunctionComponent, PropsWithChildren } from "react";

export type FieldProps = PropsWithChildren<{
    name: string
    label?: string,
    helperText?: string
}>

type WithFieldProps<P extends FieldProps = FieldProps> = P & FieldInputProps<any> & {
    helpers: FieldHelperProps<any>,
    meta: FieldMetaProps<any>
}

const withField = <P extends FieldProps>(
    component: FunctionComponent<P>
): FunctionComponent<WithFieldProps<P>> => {

    const WithField = (props: P) => {

        const [field, meta, helpers] = useField(props);

        const errorText = (meta.touched && meta.error) ? meta.error : undefined;

        return component({
            ...props,
            ...field,
            helpers,
            meta,
            error: Boolean(errorText),
            helperText: errorText || props.helperText
        }) as JSX.Element

    }

    return WithField as typeof WithField

}

export default withField