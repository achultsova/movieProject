// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import loginReducer from "../reducers/loginReducer";

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import loginReducer from '../reducers/loginReducer';


 

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const initialState: any = {};
 

const store = createStore(loginReducer,initialState, composedEnhancer)
export type RootStore = ReturnType<typeof loginReducer>;


export default store

// let middleware: any  = thunk;

// let configStore: any = applyMiddleware(...middleware);

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers =  compose;

// if (process.env.NODE_ENV === "development") {
//   middleware = [...middleware];
//   configStore = composeEnhancers(applyMiddleware(...middleware));
// }

// const initialState: any = {};

// const store = createStore(loginReducer, initialState, configStore);

// export type RootStore = ReturnType<typeof loginReducer>;

// export default store;