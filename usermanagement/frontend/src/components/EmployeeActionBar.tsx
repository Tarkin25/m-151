import {IconButton, makeStyles, Toolbar} from "@material-ui/core";
import React, {useState, Fragment} from "react";
import AddIcon from '@material-ui/icons/Add';
import useThunkDispatch from "../hooks/useThunkDispatch";
import CreateEmployeeDialog from "./CreateEmployeeDialog";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}));

const EmployeeActionBar = () => {

    const classes = useStyle();

    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    return (
        <Fragment>
            <Toolbar className={classes.root}>
                <IconButton onClick={openDialog}>
                    <AddIcon />
                </IconButton>
            </Toolbar>
            <CreateEmployeeDialog
                open={dialogOpen}
                onClose={closeDialog}
            />
        </Fragment>
    )

}

export default EmployeeActionBar