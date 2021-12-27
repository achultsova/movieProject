import React, { FC, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { AxiosResponse } from 'axios'
import client from '../../axios/axiosInstance'
import notify from '../../toasts'

const EditAccountPage: FC = () => {

    
    interface Istate {
        username?: string;
        email?: string;
        mobile?: string;
        age?: string;
    }

    const usersId = localStorage.getItem('userid')
    const history = useHistory()
    const [state, setState] = useState<Istate> ({
        username: '',
        email: '',
        mobile:'',
        age: '',
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
            id: usersId,
            username: state.username,
            email: state.email,
            mobile: state.mobile,
            age: state.age
        }
        
        client.post('/editAccount', data,  {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },       
        })
            .then ((res: AxiosResponse) => {
                if (res.status === 200) {
                    notify('данные успешно изменены')
                    history.push(`/account/${res.data.id}`)
                } else {
                    notify('Что-то пошло не так')
                }    
            })           
    }

    return (
        <Container style={{height: '900px'}}>
            <h1 style= {{paddingTop:'40px', color: 'white'}}>Редактировать информацию:</h1>
            <Form style = {{marginBottom: '10px'}} onSubmit= {handleSubmit} >
                <Form.Group controlId = "fromBasicName" className='inputs'>
                    <Form.Label >Имя:</Form.Label>
                    <Form.Control type="text" name = "username"  placeholder = "Укажите Ваше имя" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicEmail" className='inputs'>
                    <Form.Label >Email адрес:</Form.Label>
                    <Form.Control type="email" name = "email"  placeholder = "Укажите Ваш email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" className='inputs' >
                    <Form.Label >Телефон:</Form.Label>
                    <Form.Control type="text" name = "mobile"  placeholder = "Укажите Ваш телефон" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId = "fromBasicName" className='inputs'>
                    <Form.Label >Возраст:</Form.Label>
                    <Form.Control type="text" name = "age"  placeholder = "Укажите Ваш возраст" onChange={handleChange}/>
                </Form.Group>
                <Button type = "submit" className='btn_submit' variant = "dark" style={{marginBottom: '15px'}}>Зарегистрировать</Button>
                <p style={{color:'white'}}>Вернуться на <Link to="/" style={{color:'white'}}>главную</Link></p>
            </Form>        
        </Container>
    )

}

export default EditAccountPage