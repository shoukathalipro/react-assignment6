import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  TextField  from '@mui/material/TextField';
import styles from '../AppStyles.module.css';
import { useDispatch } from "react-redux";
import { addStudent } from "../actions/studentAction";



const AddStudent = () => {
    //const studentDataFromStore = useSelector( (state) => state.studentReducer)

    const [student, setStudent] = useState( {Name : '', Age : '', Course : '', Batch : '', Id : ''} );
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setStudent( { ...student, [event.target.name] : event.target.value, Id : new Date().getTime().toString() } );
    }


    const handleAddClick = () => {
        const { Name, Age, Course, Batch, Id} = student;

        if(Name==='' || Age==='' || Course==='' || Batch==='') {
            alert("Hey fill in the details!!")
            return;
        }
        dispatch( addStudent( student ) )

        //console.log(student);
        //console.log(studentDataFromStore);

        const tempObj = {...student, Name : Name, Age : Age, Course : Course, Batch : Batch, Id : Id }
        setStudent(  tempObj  )

    }


    
    
        return(
            <div className={styles.text_Field_Container_Main}>
                <div className={styles.text_Field_Container_Sub}>
                    <div>
                        <TextField required type="text" name="Name" id="outlined-helperText" label="Name" onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="number" name="Age" id="outlined-helperText" label="Age" onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="text" name="Course" id="outlined-helperText" label="Course" onChange={handleChange}/>
                    </div>
                    <div>
                        <TextField required type="text" name="Batch" id="outlined-helperText" label="Batch" onChange={handleChange}/>
                    </div>
                    <div>
                        <NavLink to="/students" className={styles.students_Cancel_Btn}>Cancel</NavLink>
                        <NavLink to="/students" onClick={handleAddClick} className={styles.students_Add_Btn}>Submit</NavLink>
                    </div>
                </div>
            </div>
        )
}

export default AddStudent;






// Previous Code For Reference:
// 
////const studentDataFromStore = useSelector( (state) => state.studentReducer)//
//const [student, setStudent] = useState( {Name : '', Age : '', Course : '', Batch : ''} );
//const dispatch = useDispatch();//
//const handleChange = (event) => {
//    setStudent( { ...student, [event.target.name] : event.target.value, Id: new Date().getTime().toString()  } );
//}//
//const handleAddClick = () => {//
//    const { Name, Age, Course, Batch } = student;
//    if(Name==='' || Age==='' || Course==='' || Batch==='') {
//        alert("Hey fill in the details!!")
//        return;
//    }
//    dispatch( addStudent( student ) )
//    //console.log(student);
//    //console.log(studentDataFromStore);
//}