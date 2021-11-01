import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../header/icons/logo.svg'


const Footer: FC = () => (
    <>
    <Container fluid style= {{backgroundColor: '#232323', color: 'white'}}>
        <Container style= {{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <img src = {logo} height = "55px" width = "217px"></img>
        </Container>

    </Container>
    </>
)

export default Footer
 