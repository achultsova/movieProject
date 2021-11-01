import React, { FC } from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import './header.scss'
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
                        <Nav.Item > <Nav.Link style = {{'color': 'white'}} href = "#" >Фильмы</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link style = {{'color': 'white'}} href = "#" >Сериалы</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link style = {{'color': 'white'}} href = "#" >Мультфильмы</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link style = {{'color': 'white'}} href = "#" >Шоу</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link style = {{'color': 'white'}} href = "#" >Коллекции</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link style = {{'color': 'white'}} href = "#" >График кинопремьер</Nav.Link> </Nav.Item>
                    </Nav>
                   <Form >
                        <Form.Control style = {{'margin': '10px', 'padding': '8px, 0, 8px, 16px'}} type = "text" placeholder = "поиск" className = "mr-sm-2 search" /> 
                    </Form>
                    <Nav>  < Signin /> </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
)

export default Header
