import { Dispatch } from 'redux'
import * as actionTypes from "../types/loginTypes";

const loginAction = {
    login:  () => async (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGIN_SUBMIT,
        });
        dispatch ({
            type: actionTypes.LOGIN_SUCCESS,
        })
    },
    // loginSuccess: () => async (dispatch: Dispatch<any>) => {
    //     dispatch ({
    //         type: actionTypes.LOGIN_SUCCESS,
    //     })
    // },

}



export default loginAction