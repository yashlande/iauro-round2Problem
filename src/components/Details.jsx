import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteStudents, updateInfo } from './../Redux/studentSlice'

function Details() {

    const students = useSelector(state => state.students.studentRecords);

    // console.log("Details State =", students)

    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteStudents(index))
    }
    const handleUpdate = (index)=>{
        dispatch(updateInfo({
            status:true,
            index:index
        }))
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ margin: '10px' }}>
                    <h2 style={{ textAlign: 'center' }}>Registred Students</h2>
                </div>
                <div>
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students && students.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.fullName}</td>
                                            <td>
                                            <Button variant="contained" onClick={() => handleUpdate(index)} color="primary" startIcon={<EditIcon />}>
                                                    Edite
                                            </Button>
                                            </td>
                                            <td>
                                                <Button variant="contained" onClick={() => handleDelete(index)} color="error" startIcon={<DeleteIcon />}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Details