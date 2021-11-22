
import * as actionTypes from "../types/loginTypes"

export type stateProps = {
	username?: string;
    email?: string;
    password?: string;
    loading?: boolean;
    authenticated?: boolean
}

type actionProps = {
    type: string;
    user?: any
}

// let initialState: stateProps = {
// username: '',
// email: '',
// password: '',
// loading: false,
// authenticated: false
// }

const user  = JSON.parse(localStorage.getItem('user') || '{}');
const initialState: stateProps = user ? { username: '', email: '', password: '', loading: true, authenticated: true } : {};


const loginReducer = (
    state: stateProps = initialState,
    action: actionProps
) => {
  switch (action.type) {
		case actionTypes.LOGIN_SUBMIT: {
			return {
				...state,
				user: action.user,
				loading: true,
			};
		}
		case actionTypes.LOGIN_SUCCESS: {
			return {
				...state,
				user: action.user,
				loading: true,
        		authenticated: true
			};
		}
		case actionTypes.LOGIN_FAILURE: {
			return {}
		}
		case actionTypes.LOGOUT: {
			return {}
		}
      default:
        return state;
    }  
}

export default loginReducer;

