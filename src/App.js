import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import Contact from './Components/Contact';
import EditStudent from './Components/EditStudent';
import Header from './Components/Header';
import Home from './Components/Home';
import Student from './Components/Student';


function App() {
  return (
    <Router>
      <Header/>

        <Routes>
            <Route path="/" element={   <Navigate   to={"/home"}/>}/>
            <Route path="/home" element={ <Home/> }/>
            <Route path="/students" element={ <Student/> }/>
            <Route path="/add-student" element={ <AddStudent/> }/>
            <Route path="/edit-student/:studentId" element={ <EditStudent/> }/>
            <Route path="/contact" element={ <Contact/> }/>
        </Routes>
    </Router>
  );
}

export default App;



// To install redux
// npm i react-redux redux

// Command to install react-router-dom:
// npm i react-router-dom
// 
// Commands required to install modules for the usage of material ui table:
// npm install material-table --save
// npm install "@material-ui/core" --save
// 
// Additional Commands to prevent error and to use Text Field:
// npm install @mui/material @emotion/react @emotion/styled