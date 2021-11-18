import React, { FC } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { Link, useHistory } from 'react-router-dom'
import loginAction from '../../../actions/loginAction'
import './modalSignIn.scss'


const ModalSignIn: FC<{show: boolean}> = ({show = true}) => {

    const history = useHistory();

    const dispatch = useDispatch();                                                                                                                                                                                            

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {               
        dispatch (loginAction.changeData({
            [e.target.name]: e.target.value                                                 
        }))
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();                          
        dispatch(loginAction.login());
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
