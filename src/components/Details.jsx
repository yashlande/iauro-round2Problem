import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteStudents, updateInfo } from './../Redux/studentSlice'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Details() {

    const students = useSelector(state => state.students.studentRecords);

    const updateStatus = useSelector(state => state.students.updateInfo);
    const { status, index } = updateStatus;

    // console.log("Details State =", students)

    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteStudents(index))
    }
    const handleUpdate = (index) => {
        dispatch(updateInfo({
            status: true,
            index: index
        }))
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ margin: '10px' }}>
                    <h2 style={{ textAlign: 'center' }}>Registred Students</h2>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Full Name</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students && students.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.fullName}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button disabled={status ? true : false} variant="contained" onClick={() => handleUpdate(index)} color="primary" startIcon={<EditIcon />}>
                                            Edite
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" onClick={() => handleDelete(index)} color="error" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Details