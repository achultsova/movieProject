import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { userPostFetch } from '../store/action'


const Registration: FC = () => {
    const [state, setState] = useState ({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        userPostFetch(state)
      }

    return (
        <Container style={{height: "900px"}}>
       <h1 style= {{paddingTop:"120px", color: "white"}}>Регистрация:</h1>
       <Form style = {{marginBottom: "10px"}} onSubmit = {handleSubmit}>
            <Form.Group controlId = "fromBasicName" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Имя:</Form.Label>
                <Form.Control type="text" name = "username" value= {state.username} onChange = {handleChange} placeholder = "Укажите Ваше имя"/>
            </Form.Group>
            <Form.Group controlId = "fromBasicEmail" style= {{marginBottom: "10px", color: "white", width: "500px"}}>
                <Form.Label >Email адрес:</Form.Label>
                <Form.Control type="email" name = "email" value={state.email} onChange = {handleChange} placeholder = "Укажите Ваш email"/>
            </Form.Group>
            <Form.Group controlId = "fromBasicPassword" style={{color: "white", marginBottom: "10px", width: "500px"}}>
                <Form.Label>Пароль:</Form.Label>
                <Form.Control type="password" name = "password" value={state.password} onChange = {handleChange} placeholder = "Укажите Ваш пароль"/>
            </Form.Group>
            <Form.Group controlId = "fromBasicCheckbox">
                <Form.Check type="checkbox" label = "Запомнить меня" style={{color:"white"}}/>
            </Form.Group>
        </Form>
        <Button variant = "dark" style={{marginBottom: "15px"}}>Зарегистрировать</Button>
        <p style={{color:"white"}}>Вернуться на <Link to="/" style={{color:"white"}}>главную</Link></p>
    </Container>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    userPostFetch: userInfo => dispatch (userPostFetch(userInfo))
})


export default connect(null, mapDispatchToProps) (Registration);