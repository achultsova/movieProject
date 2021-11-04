import React, { FC, useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ModalSignIn: FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const [show, setShow] = useState (false);

    const handleClose = () => setShow(false);

    

    return (
        <Modal show = { show } onHide= { handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>Вход</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style = {{marginBottom: "10px"}}> 
                    <Form.Group controlId = "fromBasicEmail" style= {{marginBottom: "10px"}}>
                        <Form.Label>Email адрес:</Form.Label>
                        <Form.Control type="email" placeholder = "Укажите Ваш email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId = "fromBasicPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control type="password" placeholder = "Укажите Ваш пароль" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId = "fromBasicCheckbox">
                        <Form.Check type="checkbox" label = "Запомнить меня"/>
                    </Form.Group>
                </Form>
                <Container style = {{display: "flex", justifyContent: "space-around"}}>
                    <Button variant = "dark">Вход</Button>
                    <Link to = "/registration" style = {{color: 'black'}} onClick= { handleClose }>Еще нет аккаунта?</Link>
                </Container>
                
            </Modal.Body>
        </Modal>
    )
}

export default ModalSignIn