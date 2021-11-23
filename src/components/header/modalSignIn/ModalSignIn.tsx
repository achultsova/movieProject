import React, { FC, useState } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
// import loginAction from '../../../actions/loginAction'
import './modalSignIn.scss'
import axios, { AxiosResponse } from 'axios'
// import cookie from 'react-cookie'


const ModalSignIn: FC<{show: boolean}> = ({show = true}) => {

    interface Istate {
        email?: string;
        password?: string
    }

    const [state, setState] = useState<Istate> ({
        email: "",
        password: ""
      });

    const history = useHistory();  
                                                                                                                                                                                      
    const data = {
        email: state.email,
        password: state.password
    }

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {               
        setState({
            ...state,
            [e.target.name]: e.target.value
          });
          console.log(state);
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          debugger
        e.preventDefault(); 
        axios.post('http://localhost:8080/login', data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }, 
            })
            .then ((res: AxiosResponse) => {
                console.log(res.data)    
            })
       
        }
       

      const handleClose = () => {
          history.push(history.location.pathname.replace('/login',''));

        }
return (
        <Modal show = { show } onHide= { handleClose } className='modal_sign_in'>
        <Modal.Header closeButton>
            <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  onSubmit = { handleSubmit } > 
                <Form.Group controlId = "fromBasicEmail" className='form_group'>
                    <Form.Label>Email адрес:</Form.Label>
                    <Form.Control name="email" placeholder = "Укажите Ваш email" onChange = {handleChange} />
                </Form.Group>
                <Form.Group controlId = "fromBasicPassword" className='form_group'>
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control name="password" placeholder = "Укажите Ваш пароль" onChange = {handleChange} />
                </Form.Group>
                <Form.Group controlId = "fromBasicCheckbox" className='form_group'>
                    <Form.Check type="checkbox" label = "Запомнить меня"/>
                </Form.Group>
                <Button type = "submit" className='btn_submit' variant = "dark">Вход</Button>
                <Link to = "/registration" style = {{color: 'black'}} onClick= { handleClose }>Еще нет аккаунта?</Link>
            </Form>   
        </Modal.Body>
    </Modal>
     )
    }

export default ModalSignIn
