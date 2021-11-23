import axios from "axios"




const sendRegistertoServer = () => {
   
axios.post('http://localhost:8080/register',   {
    headers: {
        'Content-Type': 'application/json'
      },
      
})

}

export default sendRegistertoServer