import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from '../reducers/loginReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const initialState: any = {};

const store = createStore(loginReducer,initialState, composedEnhancer)

export type RootStore = ReturnType<typeof loginReducer>;

export default store;