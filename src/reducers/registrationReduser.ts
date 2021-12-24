import * as actionTypes from '../types/registrationTypes'
import { actionProps, statePropsRegist } from './types'

const initialState: statePropsRegist = {
    username: '',
    email: '',
    mobile: '',
    age: '',
    password: '',
    authenticated: false
}

const registrationReducer = (
    state: statePropsRegist = initialState,
    action: actionProps
): statePropsRegist => {
    switch (action.type) {
    case actionTypes.REGISTER_REQUEST: {
        return {
            ...state,  
            ...action.payload,
        }
    }
    case actionTypes.REGISTER_SUCCESS: {
        return {
            ...state,
        		authenticated: true
        }
    }
    case actionTypes.REGISTER_FAILURE: {
        return {
            ...state,
        		authenticated: false
        }
    }
    default:
        return state
    }
}

export default registrationReducer
