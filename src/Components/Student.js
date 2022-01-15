import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';





const Student = () => {
    const studentDataFromStore = useSelector( (state) => state.studentReducer)


    return(
        <div>
            <div className={styles.students_Header}>
                <div><h1 className={styles.students_Heading}>Students Details</h1></div>
                <div><NavLink to="/add-student" className={styles.students_Add_Btn}>Add New Student</NavLink></div>
            </div>
            <div className={styles.students_Body}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right">Batch</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {studentDataFromStore.map((student) => (
                            <TableRow
                            key={student.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {student.Name}
                            </TableCell>
                            <TableCell align="right">{student.Age}</TableCell>
                            <TableCell align="right">{student.Course}</TableCell>
                            <TableCell align="right">{student.Batch}</TableCell>
                            <TableCell align="right"><NavLink to={`/edit-student/${student.Id}`}>Edit</NavLink></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Student;