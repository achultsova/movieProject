/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from 'redux'
import * as actionTypes from "../types/loginTypes";

const loginAction = {
    login: () => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGIN_REQUEST,
        });
        dispatch ({
            type: actionTypes.LOGIN_SUCCESS,
        })
    },
    failure: () => (dispatch: Dispatch<any>) =>{
        dispatch ({
        type: actionTypes.LOGIN_FAILURE,
        })
    },                                             
    logout: () => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGOUT,
        });
    }
}





export default loginAction