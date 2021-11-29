/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Cookies from 'universal-cookie'
import * as actionTypes from "../types/loginTypes"

type stateProps = {
	username: string;
    password: string;
    loading: boolean;
    authenticated: boolean;
	token: string
}


type actionProps = {
    type: string;
    payload?: any
}

const initialState: stateProps = {
username: '',
password: '',
loading: false,
authenticated: false,
token: ''
}

const loginReducer = (
    state: stateProps = initialState,
    action: actionProps
) => {
  switch (action.type) {
		case actionTypes.LOGIN_REQUEST: {
			return {
				...state,
				...action.payload,
				loading: true,
			};
		}
		case actionTypes.LOGIN_SUCCESS: {

			return {
				...state,
				loading: false,
        		authenticated: true
			};
		}
		case actionTypes.LOGIN_FAILURE: {
			return {}
		}
		case actionTypes.LOGOUT: {
			const cookies = new Cookies();
			cookies.remove('token')
			return {}
		}
      default:
        return state;
    }  
}

export default loginReducer;

