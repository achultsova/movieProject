import React, { FC } from 'react'
import './recommend.scss'
import { Card } from 'react-bootstrap'

import movie1 from './recmovies/movie1.jpg'
import movie2 from './recmovies/movie2.jpeg'
import movie3 from './recmovies/movie3.jpg'
import movie4 from './recmovies/movie4.jpg'
import movie5 from './recmovies/movie5.jpg'
import movie6 from './recmovies/movie6.jpg'

interface Icard {
    image: string;
    link: string;
}

const Recommend: FC = () => {
    
    
    const cardInfo = [
        {image: { movie1 }, link: "Капитан Марвел"}, 
        {image: { movie2 }, link: "Черная вдова"},
        {image: { movie3 }, link: "Гарри Поттер"},
        {image: { movie4 }, link: "Сталинград"},
        {image: { movie5 }, link: "Неудержимые"},
        {image: { movie6 }, link: "Начало"}
    ]

    const renderCard = (card: Icard [], index: number) => {
        return (
            <Card style = {{'display': 'inline-block','color': 'white', 'background': '#141414', 'border': 'solid black', 'width': '12rem'}} key = {index} className = "mb-3 text-center">
                    <Card.Img src = { card.image }  variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}> { card.link }</Card.Link>
                    </Card.Body>
                </Card>
        )
    }
    return (
        <div className = "recommend">
            <a> 
                <h3 className = "rec">Рекомендуем:</h3>
            </a>
            {cardInfo.map(renderCard)}
        </div>    
    );
};

export default Recommend