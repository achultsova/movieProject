import React, { FC, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

const Registration: FC = () => {
    interface Istate {
        username?: string;
        email?: string;
        mobile?: string;
        age?: string;
        password?: string;
        passwordComfirm?: string
    }

    const history = useHistory() 

    const [state, setState] = useState<Istate> ({
        username: '',
        email: '',
        mobile:'',
        age: '',
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
            password: state.password,
        }
        localStorage.setItem('username', state.username as string)
        if (state.password === state.passwordComfirm) {
            axios.post('http://localhost:8080/registration', data,  {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },       
            })
                .then ((res: AxiosResponse) => {
                    const tokenData = res.data.token
                    const usid = res.data.id
                    localStorage.setItem('userid', usid)
                    const d = new Date()
                    d.setDate(180).toString()
                    document.cookie =  `token=${encodeURIComponent(tokenData)}; expires= ${encodeURIComponent(d.toUTCString())}; path=/`
                    history.push(`/account/${usid}`)
                    window.location.reload()
                })    
        } else {
            toast('Пароли не совпадают', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-error', 
                autoClose: 4000,
                toastId: 1,
                progressClassName: 'error-progress-bar',
            })
        }        
    }
    
    return (
        <Container style={{height: '900px'}}>
            <h1 style= {{paddingTop:'40px', color: 'white'}}>Регистрация:</h1>
            <Form style = {{marginBottom: '10px'}} onSubmit= {handleSubmit} >
                <Form.Group controlId = "fromBasicName" style= {{marginBottom: '10px', color: 'white', width: '500px'}}>
                    <Form.Label >Имя:</Form.Label>
                    <Form.Control type="text" name = "username"  placeholder = "Укажите Ваше имя" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicEmail" style= {{marginBottom: '10px', color: 'white', width: '500px'}}>
                    <Form.Label >Email адрес:</Form.Label>
                    <Form.Control type="email" name = "email"  placeholder = "Укажите Ваш email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" style= {{marginBottom: '10px', color: 'white', width: '500px'}}>
                    <Form.Label >Телефон:</Form.Label>
                    <Form.Control type="text" name = "mobile"  placeholder = "Укажите Ваш телефон" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" style= {{marginBottom: '10px', color: 'white', width: '500px'}}>
                    <Form.Label >Возраст:</Form.Label>
                    <Form.Control type="text" name = "age"  placeholder = "Укажите Ваш возраст" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicPassword" style={{color: 'white', marginBottom: '10px', width: '500px'}}>
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" name = "password"  placeholder = "Укажите Ваш пароль" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicPassword" style={{color: 'white', marginBottom: '10px', width: '500px'}}>
                    <Form.Label>Повторите пароль:</Form.Label>
                    <Form.Control type="password" name = "passwordComfirm"  placeholder = "Повторите Ваш пароль" onChange={handleChange}/>
                </Form.Group>
                <Button type = "submit" className='btn_submit' variant = "dark" style={{marginBottom: '15px'}}>Зарегистрировать</Button>
                <p style={{color:'white'}}>Вернуться на <Link to="/" style={{color:'white'}}>главную</Link></p>
            </Form>        
        </Container>
    )
}

export default Registration