import * as actionTypes from '../types/loginTypes';

type stateProps = {
	email: string;
	password: string;
	loading: boolean;
	authenticated: boolean
}


type actionProps = {
	type: string;
	payload?: any
}

const initialState: stateProps = {
	email: '',
	password: '',
	authenticated: false,
	loading: false,
};

const loginReducer = (
	state: stateProps = initialState,
	action: actionProps,
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
			const formData = { email: state.email, password: state.password, token: 'hufirpusdnp89p4587n' };
			localStorage.setItem('loginInfo', JSON.stringify(formData));
			return {
				...state,
				authenticated: true,
				loading: false,
			};
		}

		default:
			return state;
	}
};

export default loginReducer;

