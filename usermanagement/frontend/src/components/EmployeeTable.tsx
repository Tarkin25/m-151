import {
  Table,
  TableCell,
  TableHead,
  TableRow, makeStyles, TableBody
} from "@material-ui/core";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectEmployeeIds} from "../core/store/employee/employeeSelectors";
import EmployeeTableRow from "./EmployeeTableRow";
import useThunkDispatch from "../hooks/useThunkDispatch";
import {loadEmployees} from "../core/store/employee/employeeActions";

const useStyle = makeStyles(theme => ({
    headerCell: {
        fontWeight: theme.typography.fontWeightBold
    }
}))

const labels = ["Firstname", "Lastname", "Username", "Email", "AHV Nr.", "Birthdate", "Personal Nr.", "Department", "Job", "Job Description"];

const EmployeeTable = () => {

    const classes = useStyle();

    const employeeIds = useSelector(selectEmployeeIds);
    const dispatch = useThunkDispatch();

    useEffect(() => {
        dispatch(loadEmployees());
    }, [dispatch]);

  return (
      <Table>
        <TableHead>
          <TableRow>
            {labels.map(label => (
                <TableCell className={classes.headerCell}>
                    {label}
                </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
            {employeeIds.map(id => (
                <EmployeeTableRow id={id} key={id} />
            ))}
        </TableBody>
      </Table>
  );
};

export default EmployeeTable;
