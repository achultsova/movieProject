import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

const Registration: FC = () => {

    

    const handleChange = () => {
        console.log()
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        
        }
    

    return (
        <Container style={{height: "900px"}}>
       <h1 style= {{paddingTop:"120px", color: "white"}}>Регистрация:</h1>
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
            <Form.Group controlId = "fromBasicCheckbox">
                <Form.Check type="checkbox" label = "Запомнить меня" style={{color:"white"}}/>
            </Form.Group>
        </Form>
        <Button variant = "dark" style={{marginBottom: "15px"}}>Зарегистрировать</Button>
        <p style={{color:"white"}}>Вернуться на <Link to="/" style={{color:"white"}}>главную</Link></p>
    </Container>
    )
}


export default Registration;