import * as actionTypes from "../types/registrationTypes";

const registrationAction = {
    addProfile: (user: any) => ({
        type: actionTypes.ADD_USER,
        payload: user
    }),
    formSubmittionStatus: (status: any) => ({
        type: actionTypes.FORM_SUBMITION_STATUS,
        payload: status
    })
}

export default registrationAction