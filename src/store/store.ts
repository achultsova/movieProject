import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from '../reducers/loginReducer';

export type RootStore = ReturnType<typeof loginReducer>;
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const token  = localStorage.getItem('token') || '';

const initialState: RootStore = {};

if (token) {
	initialState.authenticated = true;
}

const store = createStore(loginReducer, initialState, composedEnhancer);

export default store;