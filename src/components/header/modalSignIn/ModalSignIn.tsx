import React, { FC, useState } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
// import loginAction from '../../../actions/loginAction'
import './modalSignIn.scss'
import { toast } from "react-toastify";
import axios, { AxiosResponse } from 'axios'
import { useCookies} from 'react-cookie'


const ModalSignIn: FC<{show: boolean}> = ({show = true}) => {

    interface Istate {
        username?: string;
        password?: string
    }

    const [state, setState] = useState<Istate> ({
        username: "",
        password: ""
      });

    const history = useHistory();  
                                                                                                                                                                                      
    const [, setCookie] = useCookies(['token']);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {               
        setState({
            ...state,
            [e.target.name]: e.target.value
            });	    
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            username: state.username,
            password: state.password
        }       
        localStorage.setItem('username', state.username as string)
        axios.post('http://localhost:8080/login/', data, {
                
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }, 
            })
            .then ((response: AxiosResponse) => {
                if (response.status === 200) {
                    setCookie('token', response.data)
                } else if ( response.status === 404 ){
                    toast('Проверьте введенные данные', {
                        position: toast.POSITION.TOP_CENTER,
                        className: 'toast-error', 
                        autoClose: 4000,
                        toastId: 1,
                        progressClassName: 'error-progress-bar',
                    })
                }
            })
            .then()
            .then (() => {
                history.push("/account")
                window.location.reload()
              })
           
           
       
        }
       

      const handleClose = () => {
          history.push(history.location.pathname.replace('/login',''))

        }
return (
        <Modal show = { show } onHide= { handleClose } className='modal_sign_in'>
        <Modal.Header closeButton>
            <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  onSubmit = { handleSubmit } > 
                <Form.Group controlId = "fromBasicEmail" className='form_group'>
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control name="username" placeholder = "Укажите Ваш username" onChange = {handleChange} />
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
