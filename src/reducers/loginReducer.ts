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
        return {
            ...state,
        		authenticated: false
        }
    }
    case actionTypes.LOGOUT: { 
        document.cookie = 'token= ; expires = Thu, 01 Jan 1950 00:00:00 GMT'
        localStorage.removeItem('userid')   
        return {
            ...state,
        		authenticated: false
        }
    }
    default:
        return state
    }  
}

export default loginReducer

