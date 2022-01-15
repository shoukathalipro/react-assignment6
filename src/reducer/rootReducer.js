import studentReducer from "./studentReducer";

import { combineReducers }  from 'redux'



const rootReducer = combineReducers( {
    studentReducer
},)


export default rootReducer;


// first of all import our reducers