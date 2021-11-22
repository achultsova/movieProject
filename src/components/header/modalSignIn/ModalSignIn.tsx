import React, { FC, useState } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'


import { Link, useHistory } from 'react-router-dom'
import loginAction from '../../../actions/loginAction'
import './modalSignIn.scss'


const ModalSignIn: FC<{show: boolean}> = ({show = true}) => {

    interface Istate {
        username?: string;
        email?: string;
        password?: string
    }

    const [state, setState] = useState<Istate> ({
        username: "",
        email: "",
        password: ""
      });

    const history = useHistory();                                                                                                                                                                                      

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {               
        setState({
            ...state,
            [e.target.name]: e.target.value
          });
          console.log(state);
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();   
        // setState({submitted: true}) ;
        const {username, email, password } = state;
        if (username && email && password) {   
            loginAction.login(username, email, password)
        }
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
                    <Form.Label>Логин:</Form.Label>
                    <Form.Control name="username" placeholder = "Укажите Ваш логин" onChange = {handleChange} />
                </Form.Group>
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
