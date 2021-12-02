import * as actionTypes from '../types/registrationTypes'
import { actionProps, statePropsRegist } from './types'

const initialState: statePropsRegist = {
    username: '',
    email: '',
    mobile: '',
    age: '',
    password: '',
    registering: false
}

const registrationReducer = (
    state: statePropsRegist = initialState,
    action: actionProps
): statePropsRegist => {
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
        return state
    }
}

export default registrationReducer
