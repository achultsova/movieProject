import { Dispatch } from 'redux'
import * as actionTypes from '../types/loginTypes'
import { actionProps } from '../reducers/types'

const loginAction = {
    login: () => (dispatch: Dispatch<actionProps>):void => {
        dispatch ({
            type: actionTypes.LOGIN_REQUEST,
        })
        dispatch ({
            type: actionTypes.LOGIN_SUCCESS,
        })
    },
    failure: () => (dispatch: Dispatch<actionProps>):void =>{
        dispatch ({
            type: actionTypes.LOGIN_FAILURE,
        })
    },                                             
    logout: () => (dispatch: Dispatch<actionProps>):void => {
        dispatch ({
            type: actionTypes.LOGOUT,
        })
    }
}





export default loginAction