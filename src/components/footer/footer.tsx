import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../header/icons/logo.svg'
import './footer.scss'


const Footer: FC = () => (
    <>
    <Container  fluid className='footer'>
        <Container className='footer_img'>
            <img src = {logo} ></img>
        </Container>

    </Container>
    </>
)

export default Footer
 