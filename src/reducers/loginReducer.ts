import * as actionTypes from "../types/loginTypes"

type stateProps = {
	username: string;
    email: string;
    password: string;
    loading: boolean;
    isAuthorized: boolean
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
isAuthorized: false
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
        isAuthorized: true
			};
		}
    
    
      default:
        return state;
    }  
}

export default loginReducer;

