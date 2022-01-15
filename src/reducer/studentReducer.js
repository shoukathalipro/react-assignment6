const initialState = [
    {
        "Name" : "John",
        "Age" : "26",
        "Course" : "MERN",
        "Batch" : "October",
        "Id"    : "1"
      },
      {
        "Name" : "Doe",
        "Age" : "25",
        "Course" : "MERN",
        "Batch" : "November",
        "Id"    : "2"
      },
      {
        "Name" : "Biden",
        "Age" : "26",
        "Course" : "MERN",
        "Batch" : "September",
        "Id"    : "3"
      },
      {
        "Name" : "Barar",
        "Age" : "22",
        "Course" : "Christ",
        "Batch" : "September",
        "Id"    : "4"
      },
      {
        "Name" : "Elent",
        "Age" : "23",
        "Course" : "MERN",
        "Batch" : "October",
        "Id"    : "5"
      }
];

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [ ...state, action.payload ]
        case "EDIT_STUDENT":
          const { Id, Name, Age, Course, Batch } = action.payload;
          const existingUser = state.find( (user) => user.Id === Id);
          if (existingUser) {
            existingUser.Name = Name;
            existingUser.Age = Age;
            existingUser.Course = Course;
            existingUser.Batch = Batch;
            existingUser.Id = Id;
          }
            return [ ...state]
    
        default:
            return state;
    }
}

export default studentReducer;


//////////////////////////////////////////////////////////////////////
// This is how we handle our previous data  i.e using spread operator

///////////////////////////////
// Previous Code for reference:
// 
//case "EDIT_STUDENT":
//  state.forEach( (student) => {
//    if(action.payload.Id === student.Id) {
//      return{
//        ...
//        [student.Name] : [action.payload.Name],
//        [student.Age] : [action.payload.Age],
//        [student.Course] : [action.payload.Course],
//        [student.Batch] : [action.payload.Batch]
//      }             
//    }
//  })
//
//  return [ ...state, action.payload ]

///////////////////////////////////
// What is Array.prototype.find()?
// 
// The find() method returns the value of the first element in the provided array that 
// satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

////////////////////////////////////////////////////////////////////////////////////////////////////////
// In the "EDIT_STUDENT" action we're returning only the existing state value and not the payload. Why?
// 
// This is because the "payload" is whatever new value we pass.
// If we're returning that new value then our existing object will be edited but also a copy of that 
// existing object will be created with the same exact Id. We don't want that. We only want to edit the 
// data of the existing object. So we return the previous or current data of the "state".

/////////////////////////////////
// What is happening in line-44?
// 
// We are dispatching a "student" object right?
// The "student" object contains an "Id", "Name", "Age", "Course" and "Batch" respectively.
// Here we're destructing that object to get use these values separately.
// With the help of the "existingUser" variable we'll check whether the received "Id" matches with
// any of the "Id" of the objects inside our "state". 
// If it matches then we're re-assigning value of the "Name" key of that matched object inside the "state"
// with the "Name" value we received through the "student" object. We do the same for "Age", "Course", "Batch" and "Id" respectively.