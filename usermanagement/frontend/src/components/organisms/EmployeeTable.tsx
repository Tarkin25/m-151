import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer, makeStyles, TableBody
} from "@material-ui/core";
import React from "react";
import Employee from "../../core/models/Employee";

type EmployeeTableProps = {
  employees: Employee[];
};

const useStyle = makeStyles(theme => ({
    headerCell: {
        fontWeight: theme.typography.fontWeightBold
    }
}))

const labels = ["Firstname", "Lastname", "Username", "Email", "AHV Nr.", "Birthdate", "Personal Nr.", "Department", "Job", "Job Description"];

const getValues = (e: Employee) => [
    e.firstName,
    e.lastName,
    e.username,
    e.email,
    e.ahvNumber,
    e.birthDate,
    e.personalNumber,
    e.department.name,
    e.job ? e.job.name : " - ",
    e.job ? e.job.description : " - "
]

const EmployeeTable = (props: EmployeeTableProps) => {

    const {employees} = props;

    const classes = useStyle();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {labels.map(label => (
                <TableCell className={classes.headerCell}>
                    {label}
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            {employees.map(employee => (
                <TableRow>
                    {getValues(employee).map(value => (
                        <TableCell>
                            {value}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
