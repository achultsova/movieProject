import React, { FC, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AxiosResponse } from 'axios'
import client from '../../axios/axiosInstance'
import registrationAction from '../../actions/registrationAction'
import notify from '../../toasts'
import './RegistrationPage.scss'


const Registration: FC = () => {
    interface Istate {
        username?: string;
        email?: string;
        mobile?: string;
        age?: string;
        role?: string;
        password?: string;
        passwordComfirm?: string
    }

    const history = useHistory() 
    const dispatch = useDispatch()
    const [state, setState] = useState<Istate> ({
        username: '',
        email: '',
        mobile:'',
        age: '',
        role: '',
        password: '',
        passwordComfirm: ''
    })

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
            email: state.email,
            mobile: state.mobile,
            age: state.age,
            role: state.role,
            password: state.password,
        }
        
        client.post('/registration', data,  {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },       
        })
            .then ((res: AxiosResponse) => {
                if (res.status === 200) {
                    const tokenData = res.data.token
                    localStorage.setItem('userid', res.data.id)
                    const d = new Date()
                    d.setDate(180).toString()
                    document.cookie =  `token=${encodeURIComponent(tokenData)}; expires= ${encodeURIComponent(d.toUTCString())}; path=/`
                    history.push(`/account/${res.data.id}`)
                    dispatch(registrationAction.registerSuccess())
                } else {
                    notify('??????-???? ?????????? ???? ??????')
                    dispatch(registrationAction.registerFailure())
                }    
            })           
    }
    
    return (
        <Container style={{height: '900px'}}>
            <h1 style= {{paddingTop:'40px', color: 'white'}}>??????????????????????:</h1>
            <Form style = {{marginBottom: '10px'}} onSubmit= {handleSubmit} >
                <Form.Group controlId = "fromBasicName" className='inputs'>
                    <Form.Label >??????:</Form.Label>
                    <Form.Control type="text" name = "username"  placeholder = "?????????????? ???????? ??????" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicEmail" className='inputs'>
                    <Form.Label >Email ??????????:</Form.Label>
                    <Form.Control type="email" name = "email"  placeholder = "?????????????? ?????? email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" className='inputs' >
                    <Form.Label >??????????????:</Form.Label>
                    <Form.Control type="text" name = "mobile"  placeholder = "?????????????? ?????? ??????????????" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" className='inputs'>
                    <Form.Label >??????????????:</Form.Label>
                    <Form.Control type="text" name = "age"  placeholder = "?????????????? ?????? ??????????????" onChange={handleChange}/>
                </Form.Group>
                <p style= {{color: 'white'}}>?????????????? ???????? ????????: </p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="radio" style= {{color: 'white', paddingRight: '20px'}}>
                        <label >
                            <input 
                                type="radio"
                                value="User"
                                name= "role"
                                checked= {state.role === 'User'}
                                onChange={handleChange}/>
                        User </label>
                    </div>
                    <div className="radio" style= {{color: 'white'}}>
                        <label >
                            <input 
                                type="radio"
                                value="Admin"
                                name= "role"
                                checked= {state.role === 'Admin'}
                                onChange={handleChange}/>
                        Admin </label>
                    </div>
                </div>
                <Form.Group controlId = "fromBasicPassword" className='inputs'>
                    <Form.Label>????????????:</Form.Label>
                    <Form.Control type="password" name = "password"  placeholder = "?????????????? ?????? ????????????" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicPassword"  className='inputs'>
                    <Form.Label>?????????????????? ????????????:</Form.Label>
                    <Form.Control type="password" name = "passwordComfirm"  placeholder = "?????????????????? ?????? ????????????" onChange={handleChange}/>
                </Form.Group>
                <Button type = "submit" className='btn_submit' variant = "dark" style={{marginBottom: '15px'}}>????????????????????????????????</Button>
                <p style={{color:'white'}}>?????????????????? ???? <Link to="/" style={{color:'white'}}>??????????????</Link></p>
            </Form>        
        </Container>
    )
}

export default Registration