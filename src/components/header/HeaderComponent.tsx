import React, { FC } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import './header.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './icons/logo.svg'  
import { RootStore } from '../../store/store'




const Header: FC = () => {   
    const authenticated = useSelector((state: RootStore) => state.authenticated)
    const userid = localStorage.getItem('userid')

     
    return (
        <div >
            <Navbar fixed="top" collapseOnSelect expand="md" style={{backgroundColor: '#232323', height: '80px'}} className = "header"   >
                <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Navbar.Brand href = "/">
                        <img src={ logo } height="55px" width="217px"  alt="logo" />
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "mr-auto" style={{marginRight: '70px'}}>
                            <Nav.Item > <Nav.Link> <Link to = "/films" style={{color: 'white', textDecoration: 'none'}}>Фильмы</Link></Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link> <Link to ="/series" style={{color: 'white', textDecoration: 'none'}}> Сериалы</Link></Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link> <Link to ="/cartoons" style={{color: 'white', textDecoration: 'none'}}>Мультфильмы</Link> </Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link><Link to ="/shows" style={{color: 'white', textDecoration: 'none'}}>Шоу</Link></Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link><Link to ="/collections" style={{color: 'white', textDecoration: 'none'}}>Коллекции</Link></Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link><Link to ="/primeSchedule" style={{color: 'white', textDecoration: 'none'}}>Кинопремьеры</Link></Nav.Link> </Nav.Item>
                        </Nav>
                        <Form >
                            <Form.Control style={{'margin': '10px', 'padding': '8px, 0, 8px, 16px', width: '100%', maxWidth: '160px'}}
                                type = "text"
                                placeholder = "поиск"
                                className = "ms-auto" /> 
                        </Form>
                        {authenticated ?
                            ( <Nav>
                                <Button style={{'margin': '10px'}} variant = "warning" className = "mr-2" ><Link to={`/account/${userid}`} style={{color: 'black', textDecoration: 'none' }}>Личный кабинет</Link></Button>
                            </Nav>  
                            ) :
                            (<Nav>  
                                <Link to={(location: Location) => `${location.pathname === '/' ? '' : location.pathname}/login`}><Button style = {{'margin': '10px'}} variant = "light" className = "mr-2"> Вход </Button> </Link>
                                <Button style = {{'margin': '10px'}} variant = "warning" className = "mr-2" href= "/registration">Регистрация</Button>
                            </Nav>
                            )
                        }                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header
