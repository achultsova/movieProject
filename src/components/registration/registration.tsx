import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import axios, { AxiosResponse } from 'axios'
import { useCookies } from 'react-cookie'

const Registration: FC = () => {

    // const [cookies, setCookie ] = useCookies(['token']);

    interface Istate {
        username?: string;
        email?: string;
        mobile?: string;
        age?: string;
        password?: string;
        passwordComfirm?: string
    }

    const [, setCookie] = useCookies(['token']);

    const [state, setState] = useState<Istate> ({
        username: '',
        email: '',
        mobile:'',
        age: '',
        password: '',
        passwordComfirm: ''
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
          });
        console.log()
    }

    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        debugger
        e.preventDefault();  
        const data = {
            username: state.username,
            email: state.email,
            mobile: state.mobile,
            age: state.age,
            password: state.password,
        }
        if (state.password === state.passwordComfirm) {
            axios.post('http://localhost:8080/registration', data,  {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },       
            })
            .then ((res: AxiosResponse) => {
                console.log(res.data)   
                setCookie('token', res.data) 
            })
        } else {
                alert('Пароли не совпадают')
        }
    }
    

    return (
        <Container style={{height: "900px"}}>
       <h1 style= {{paddingTop:"80px", color: "white"}}>Регистрация:</h1>
       <Form style = {{marginBottom: "10px"}} onSubmit= {handleSubmit} >
            <Form.Group controlId = "fromBasicName" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Имя:</Form.Label>
                <Form.Control type="text" name = "username"  placeholder = "Укажите Ваше имя" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId = "fromBasicEmail" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Email адрес:</Form.Label>
                <Form.Control type="email" name = "email"  placeholder = "Укажите Ваш email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId = "fromBasicName" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Телефон:</Form.Label>
                <Form.Control type="text" name = "mobile"  placeholder = "Укажите Ваш телефон" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId = "fromBasicName" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Возраст:</Form.Label>
                <Form.Control type="text" name = "age"  placeholder = "Укажите Ваш возраст" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId = "fromBasicPassword" style={{color: "white", marginBottom: "10px", width: "500px"}}>
                <Form.Label>Пароль:</Form.Label>
                <Form.Control type="password" name = "password"  placeholder = "Укажите Ваш пароль" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId = "fromBasicPassword" style={{color: "white", marginBottom: "10px", width: "500px"}}>
                <Form.Label>Повторите пароль:</Form.Label>
                <Form.Control type="password" name = "passwordComfirm"  placeholder = "Повторите Ваш пароль" onChange={handleChange}/>
            </Form.Group>
            {/* <Form.Group controlId = "fromBasicCheckbox">
                <Form.Check type="checkbox" label = "Запомнить меня" style={{color:"white"}}/>
            </Form.Group> */}
            <Button type = "submit" className='btn_submit' variant = "dark" style={{marginBottom: "15px"}}>Зарегистрировать</Button>
            <p style={{color:"white"}}>Вернуться на <Link to="/" style={{color:"white"}}>главную</Link></p>
        </Form>
        
    </Container>
    )
}


export default Registration;