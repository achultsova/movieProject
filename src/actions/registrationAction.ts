import { Dispatch } from 'redux'
import * as actionTypes from "../types/registrationTypes";
import { actionProps } from '../reducers/registrationReduser';

const registrationAction = {
    registerSuccess: () => (dispatch: Dispatch<actionProps>):void => {
        dispatch ({
        type: actionTypes.REGISTER_SUCCESS,
        })
    },
    registerFailure: () => (dispatch: Dispatch<actionProps>):void => {
        dispatch ({
            type: actionTypes.REGISTER_FAILURE,
            
        })
    }
   
}

export default registrationAction