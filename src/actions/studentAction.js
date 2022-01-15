export const addStudent = (studentData) => {
    return{
        type: "ADD_STUDENT",
        payload: studentData
    }
}

export const editStudent = (student) => {
    return{
        type: "EDIT_STUDENT",
        payload: student
    }
}