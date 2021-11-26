import * as actionTypes from "../types/registrationTypes"

type stateProps = {
	username: string;
    email: string;
    mobile: string;
    age: string;
    password: string;
    registering: boolean
}

type actionProps = {
    type: string;
    payload?: any
}

const initialState: stateProps = {
    username: '',
    email: '',
    mobile: '',
    age: '',
    password: '',
    registering: false
    }

const registrationReducer = (
    state: stateProps = initialState,
    action: actionProps
) => {
    switch (action.type) {
        case actionTypes.REGISTER_REQUEST: {
            return {
                ...state,
            registering: true  

            }
        }
        case actionTypes.REGISTER_SUCCESS: {
            return {}
        }
        case actionTypes.REGISTER_FAILURE: {
            return {}
        }
        default:
      return state;
    }
}

export default registrationReducer
