import React, { FC, useState } from 'react'
import {  Form, Button, Modal } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './modalSignIn.scss'
import { AxiosResponse } from 'axios'
import client from '../../../axios/axiosInstance'
import loginAction from '../../../actions/loginAction'
import notify from '../../../toasts'

const ModalSignIn: FC<{show: boolean}> = ({show = true}) => {
    interface Istate {
        username?: string;
        password?: string
    }
    

    const [state, setState] = useState<Istate> ({
        username: '',
        password: ''
    })

    const history = useHistory()                                                                                                                                                                                  
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {               
        setState({
            ...state,
            [e.target.name]: e.target.value
        })	    
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            username: state.username,
            password: state.password
        } 
        client.post('/login', data, {               
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
        })
            .then ((response: AxiosResponse) => {
                if (response.status === 200) {
                    const tokenData = response.data.token 
                    localStorage.setItem('userid', response.data.id)
                    const d = new Date()
                    d.setDate(180).toString()
                    document.cookie =  `token=${encodeURIComponent(tokenData)}; expires= ${encodeURIComponent(d.toUTCString())}; path=/`                  
                    history.push(`/account/${response.data.id}`)
                    dispatch(loginAction.login())
                } else if ( response.status === 404 ){
                    notify('?????????????????? ?????????????????? ????????????')
                    dispatch(loginAction.failure())
                }
            }) 
    }   

    const handleClose = () => {
        history.push(history.location.pathname.replace('/login',''))

    }
    return (
        <Modal show = { show } onHide= { handleClose } className='modal_sign_in'>
            <Modal.Header closeButton>
                <Modal.Title>????????</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  onSubmit = { handleSubmit } > 
                    <Form.Group controlId = "fromBasicEmail" className='form_group'>
                        <Form.Label>??????:</Form.Label>
                        <Form.Control name="username" placeholder = "?????????????? ?????? username" onChange = {handleChange} />
                    </Form.Group>
                    <Form.Group controlId = "fromBasicPassword" className='form_group'>
                        <Form.Label>????????????:</Form.Label>
                        <Form.Control name="password" placeholder = "?????????????? ?????? ????????????" onChange = {handleChange} />
                    </Form.Group>
                    <Form.Group controlId = "fromBasicCheckbox" className='form_group'>
                        <Form.Check type="checkbox" label = "?????????????????? ????????"/>
                    </Form.Group>
                    <Button type = "submit" className='btn_submit' variant = "dark">????????</Button>
                    <Link to = "/registration" style = {{color: 'black'}} onClick= { handleClose }>?????? ?????? ?????????????????</Link>
                </Form>   
            </Modal.Body>
        </Modal>
    )
}

export default ModalSignIn
