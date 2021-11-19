import { Dispatch } from 'redux'
import * as actionTypes from "../types/registrationTypes";

const registrationAction = {
    registerSuccess: () => (dispatch: Dispatch<any>) => {
        dispatch ({
        type: actionTypes.REGISTER_SUCCESS,
        })
    },
    registerFailure: () => (dispatch: Dispatch<any>) => {
        dispatch ({
            type: actionTypes.REGISTER_FAILURE,
            
        })
    }
   
}

export default registrationAction