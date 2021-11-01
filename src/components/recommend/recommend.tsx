import React, { FC } from 'react'
import './recommend.scss'
import { Card} from 'react-bootstrap'

import movie1 from './recmovies/movie1.jpg'
import movie2 from './recmovies/movie2.jpeg'
import movie3 from './recmovies/movie3.jpg'
import movie4 from './recmovies/movie4.jpg'
import movie5 from './recmovies/movie5.jpg'
import movie6 from './recmovies/movie6.jpg'

const Recommend: FC = () => ( 
    <>
        <div className = "recommend">
            <a> 
                <h3 className = "rec">Рекомендуем:</h3>
            </a>
            <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3 text-center ">
                    <Card.Img src = { movie1 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Капитан Марвел</Card.Link>
                    </Card.Body>
                </Card>
                <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3">
                    <Card.Img src = { movie2 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Черная вдова</Card.Link>
                    </Card.Body>
                </Card>
                <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3">
                    <Card.Img src = { movie3 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Гарри Поттер</Card.Link>
                    </Card.Body>
                </Card>
                <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3">
                    <Card.Img src = { movie4 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Сталинград</Card.Link>
                    </Card.Body>
                </Card>
                <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3">
                    <Card.Img src = { movie5 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Неудержимые</Card.Link>
                    </Card.Body>
                </Card>
                <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} className = "mb-3">
                    <Card.Img src = { movie6 }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}>Начало</Card.Link>
                    </Card.Body>
                </Card>  
        </div>
    </>    
)

export default Recommend