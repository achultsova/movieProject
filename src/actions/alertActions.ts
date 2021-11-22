import * as actionTypes from "../types/alertTypes";

function success(message: string) {
    return { type: actionTypes.ALERT_SUCCESS, message };
}

function error(message: string) {
    return { type: actionTypes.ALERT_ERROR, message };
}

function clear() {
    return { type: actionTypes.ALERT_CLEAR };
}

 const alertActions = {
    success,
    error,
    clear
};



export default alertActions