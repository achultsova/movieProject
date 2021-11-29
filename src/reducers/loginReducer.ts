import Cookies from 'universal-cookie'
import * as actionTypes from "../types/loginTypes"

type stateProps = {
	username: string;
    password: string;
    authenticated: boolean
}

export type payloadProps = {
	username?: string;
	password?: string;
	authenticated?: boolean
}

export type actionProps = {
    type: string;
    payload?: payloadProps
}

export const initialState: stateProps = {
username: '',
password: '',
authenticated: false,
}

const loginReducer = (
    state: stateProps = initialState,
    action: actionProps
): stateProps => {
  switch (action.type) {
		case actionTypes.LOGIN_REQUEST: {
			return {
				...state,
				...action.payload,
			};
		}
		case actionTypes.LOGIN_SUCCESS: {

			return {
				...state,
        		authenticated: true
			};
		}
		case actionTypes.LOGIN_FAILURE: {
			return state
		}
		case actionTypes.LOGOUT: {
			const cookies = new Cookies();
			cookies.remove('token')
			return state
		}
      default:
        return state;
    }  
}

export default loginReducer;

