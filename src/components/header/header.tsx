import React, { FC } from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import './header.scss'
import { Link } from 'react-router-dom'
import logo from './icons/logo.svg' 
import Signin from '../signin/signin'




const Header: FC = () => (
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
                    <Nav>  < Signin /> </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
)

export default Header
