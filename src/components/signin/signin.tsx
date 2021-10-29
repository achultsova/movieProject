import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

const Signin: FC = () => (
    <>
         <Button style = {{'margin': '10px'}} variant = "light" className = "mr-2"> Вход </Button>
         <Button style = {{'margin': '10px'}} variant = "warning" className = "mr-2"> Регистрация </Button>
     </>
)

export default Signin