// import Cookies from 'universal-cookie'
import * as actionTypes from '../types/loginTypes'
import {statePropsLogin, actionProps } from './types'



export const initialState: statePropsLogin = {
    username: '',
    password: '',
    authenticated: false,
}

const loginReducer = (
    state: statePropsLogin = initialState,
    action: actionProps
): statePropsLogin => {
    switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
        return {
            ...state,
            ...action.payload,
        }
    }
    case actionTypes.LOGIN_SUCCESS: {

        return {
            ...state,
        		authenticated: true
        }
    }
    case actionTypes.LOGIN_FAILURE: {
        return state
    }
    case actionTypes.LOGOUT: {    
        return state
    }
    default:
        return state
    }  
}

export default loginReducer

