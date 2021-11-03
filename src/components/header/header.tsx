import React, { FC, useState } from 'react'
import { Navbar, Nav, Container, Form, Button, Modal } from 'react-bootstrap'
import './header.scss'
import { Link } from 'react-router-dom'
import logo from './icons/logo.svg' 





const Header: FC = () => {

    const [show, setShow] = useState (false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


return (
    <div className = "header">
            <Navbar fixed = "top" collapseOnSelect expand = "md" style = {{backgroundColor: '#232323'}} bg = "dark" variant = "dark"  >
                <Container style= {{display: 'flex', justifyContent: 'space-between'}}>
                <Navbar.Brand href = "/">
                     <img src = { logo } height = "55px" width = "217px"  alt = "logo" />
                      </Navbar.Brand> 
                <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                <Navbar.Collapse id = "responsive-navbar-nav">
                    <Nav className = "mr-auto links">
                        <Nav.Item > <Nav.Link> <Link to = "/films" style= {{color: 'white'}}>Фильмы</Link></Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link> <Link to ="/series" style= {{color: 'white'}}> Сериалы</Link></Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link> <Link to ="/cartoons" style= {{color: 'white'}}>Мультфильмы</Link> </Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link><Link to ="/shows" style= {{color: 'white'}}>Шоу</Link></Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link><Link to ="/collections" style= {{color: 'white'}}>Коллекции</Link></Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link><Link to ="/primeSchedule" style= {{color: 'white'}}>График кинопремьер</Link></Nav.Link> </Nav.Item>
                    </Nav>
                   <Form >
                        <Form.Control style = {{'margin': '10px', 'padding': '8px, 0, 8px, 16px'}} type = "text" placeholder = "поиск" className = "mr-20" /> 
                    </Form>
                    <Nav>  
                        <Button style = {{'margin': '10px'}} variant = "light" className = "mr-2" onClick = {handleShow}> Вход </Button>
                        <Button style = {{'margin': '10px'}} variant = "warning" className = "mr-2"> Регистрация </Button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show = { show } onHide= { handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId = "fromBasicEmail">
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control type="email" placeholder = "Укажите Ваш email"/>
                        </Form.Group>
                        <Form.Group controlId = "fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder = "Укажите Ваш пароль"/>
                        </Form.Group>
                        <Form.Group controlId = "fromBasicCheckbox">
                            <Form.Check type="checkbox" label = "Запомнить меня"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
)
}


export default Header
