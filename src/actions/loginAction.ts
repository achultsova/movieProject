import { Dispatch } from 'redux'
import * as actionTypes from "../types/loginTypes";

const loginAction = {
    login:  (action: any) => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGIN_SUBMIT,
            payload: action.payload
        });
    },
    loginSuccess: () => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGIN_SUCCESS,
        })
    },                                             

}



export default loginAction