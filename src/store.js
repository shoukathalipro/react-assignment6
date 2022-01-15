import { createStore } from 'redux';

import rootReducer from './reducer/rootReducer';



const store = createStore(  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;



// createStore should be import from redux
// store only wants root reducer because every other reducers are collected by root reducer
// 

// "store" will be spread in all our components.



// The below command will check all our states and looks after it. It is a safety mechanism.
// 
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



// Previous Code For Reference:
//           const store = createStore(  rootReducer,
//               applyMiddleware(sagaMiddleware),
//                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 
// 
// For some reason can't use the redux devtools extension along with saga. It shows the following error:
// Uncaught Error: It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.



// This is for using the saga:
// applyMiddleware(sagaMiddleware)