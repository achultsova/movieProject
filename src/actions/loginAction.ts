import { Dispatch } from 'redux'
import * as actionTypes from "../types/loginTypes";

const loginAction = {
    login:  () => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.LOGIN_SUBMIT,
        });
        dispatch ({
            type: actionTypes.LOGIN_SUCCESS,
        })
    },
    changeData:  (data: any)  => ({
        type: actionTypes.LOGIN_DATA_CHANGE,
        payload: data
    })
}



export default loginAction