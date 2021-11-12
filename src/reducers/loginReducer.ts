import * as actionTypes from "../types/loginTypes"

type stateProps = {
	username: string;
    email: string;
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
email: '',
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
		case actionTypes.LOGIN_DATA_CHANGE: {
			return {
				...state,
				...action.payload,
				loading: true,
			};
		}
		case actionTypes.LOGIN_SUCCESS: {
			localStorage.setItem('username', state.username);
			localStorage.setItem('email', state.email);
			localStorage.setItem('token', 'uhiovupomvsgvfoh');
			
			return {
				...state,
				loading: false,
				authenticated: true
			};
		}
    
    
      default:
        return state;
    }  
}

export default loginReducer;

