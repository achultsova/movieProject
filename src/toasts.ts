import { toast } from 'react-toastify'

const notify = (toastText: string) => {
    toast(toastText, {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-error', 
        autoClose: 4000,
        toastId: 1,
        progressClassName: 'error-progress-bar',
    })
}

export default notify