import * as actionTypes from "../types/registrationTypes"
import { payloadProps } from './loginReducer'

type stateProps = {
	username: string;
    email: string;
    mobile: string;
    age: string;
    password: string;
    registering: boolean
}

export type actionProps = {
    type: string;
    payload?: payloadProps
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
): stateProps => {
    switch (action.type) {
        case actionTypes.REGISTER_REQUEST: {
            return {
                ...state,
            registering: true  

            }
        }
        case actionTypes.REGISTER_SUCCESS: {
            return state
        }
        case actionTypes.REGISTER_FAILURE: {
            return state
        }
        default:
      return state;
    }
}

export default registrationReducer
