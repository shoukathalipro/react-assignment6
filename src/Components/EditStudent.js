import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import  TextField  from '@mui/material/TextField';
import styles from '../AppStyles.module.css';
import { useDispatch, useSelector } from "react-redux";
import { editStudent } from "../actions/studentAction";



const EditStudent = () => {
    const studentDataFromStore = useSelector( (state) => state.studentReducer)
    const { studentId } = useParams();

    const [student, setStudent] = useState( {Name : '', Age : '', Course : '', Batch : ''} );
    const { Name, Age, Course, Batch} = student;
    const dispatch = useDispatch();

    useEffect(  () => {
        studentDataFromStore.forEach(   (student) => {
            if(student.Id === studentId) {
                setStudent( { Name : student.Name, Age : student.Age, Course : student.Course, Batch : student.Batch, Id : studentId } )
            }
        } );
    }, [studentId, studentDataFromStore])

    const handleChange = (event) => {
        setStudent( { ...student, [event.target.name] : event.target.value } );
    }


    const handleAddClick = () => {
        if(Name==='' || Age==='' || Course==='' || Batch==='') {
            alert("Hey fill in the details!!")
            return;
        }

        //console.log(student);
        //console.log(studentDataFromStore);

        dispatch( editStudent( student ) )

    }


    
    
        return(
            <div className={styles.text_Field_Container_Main}>
                <div className={styles.text_Field_Container_Sub}>
                    <div>
                        <TextField required type="text" name="Name" id="outlined-helperText" label="Name" value={Name} onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="number" name="Age" id="outlined-helperText" label="Age" value={Age} onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="text" name="Course" id="outlined-helperText" label="Course" value={Course} onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="text" name="Batch" id="outlined-helperText" label="Batch" value={Batch} onChange={handleChange}/>
                    </div>
                    <div>
                        <NavLink to="/students" className={styles.students_Cancel_Btn}>Cancel</NavLink>
                        <NavLink to="/students" onClick={handleAddClick} className={styles.students_Add_Btn}>Submit</NavLink>
                    </div>
                </div>
            </div>
        )
}

export default EditStudent;






