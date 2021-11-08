import React, { FC, useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ModalSignIn: FC<{show: boolean, handleClose: () => void}> = ({show, handleClose}) => {

    const [state, setState] = useState ({
        email: "",
        password: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       debugger
        setState ({
            ...state,
            [e.target.name]: e.target.value
        })
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('token', 'hgigipufo95yf9yf459y')
      }
    return (
            <Modal show = { show } onHide= { handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>Вход</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  onSubmit = { handleSubmit } style = {{marginBottom: "10px"}}> 
                    <Form.Group controlId = "fromBasicEmail" style= {{marginBottom: "10px"}}>
                        <Form.Label>Email адрес:</Form.Label>
                        <Form.Control name="email" placeholder = "Укажите Ваш email" onChange = { handleChange } />
                    </Form.Group>
                    <Form.Group controlId = "fromBasicPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control name="password" placeholder = "Укажите Ваш пароль" onChange = { handleChange } />
                    </Form.Group>
                    <Form.Group controlId = "fromBasicCheckbox">
                        <Form.Check type="checkbox" label = "Запомнить меня"/>
                    </Form.Group>
                    <Container style = {{display: "flex", justifyContent: "space-around"}}>
                    <Button type = "submit" variant = "dark">Вход</Button>
                    <Link to = "/registration" style = {{color: 'black'}} onClick= { handleClose }>Еще нет аккаунта?</Link>
                </Container>
                </Form>   
            </Modal.Body>
        </Modal>
         )
    }

    export default ModalSignIn
