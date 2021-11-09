import React, { FC, useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import loginAction from '../../actions/loginAction'


const ModalSignIn: FC<{show: boolean, handleClose: () => void}> = ({show, handleClose}) => {

    const dispatch = useDispatch();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //    const name = e.target.name;
       setLogin ({
           ...login,
           [e.target.name]: e.target.value,

       })
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch (loginAction.login({
            email: login.email,
            password: login.password
        }));
        
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
                        <Form.Control name="email" placeholder = "Укажите Ваш email" onChange = {handleChange} />
                    </Form.Group>
                    <Form.Group controlId = "fromBasicPassword">
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control name="password" placeholder = "Укажите Ваш пароль" onChange = {handleChange} />
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