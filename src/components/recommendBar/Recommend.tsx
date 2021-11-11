import React, { FC } from 'react'
import './recommend.scss'
import { Card} from 'react-bootstrap'

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
    const cardInfo: Icard[] = [
        {image: movie1, link: "Капитан Марвел"},
        {image: movie2, link: "Черная вдова"},
        {image: movie3, link: "Гарри Поттер"},
        {image: movie4, link: "Сталинград"},
        {image: movie5, link: "Неудержимые"},
        {image: movie6, link: "Начало"},
    ]

    const RenderCard: FC<{ card: Icard }> = ({ card }) => (
    
            <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid #141414', 'width': '12rem'}} className = "mb-3 text-center ">
                    <Card.Img src = { card.image } style = {{'height': '16rem'}} variant = "top"/>
                    <Card.Body>
                    <Card.Link href = "#" style = {{'color': 'white'}}> { card.link } </Card.Link>
                    </Card.Body>
                </Card>
    )

    return (
        <div className = "recommend">
            <div className= "m_c">
                <h3 className = "rec">Рекомендуем:</h3>
                <a style = {{'color': 'white'}} href = '#'>Смотреть все</a>
            </div> 
                
            
            <div className = "cards">
            {
                cardInfo.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
            }
            </div>
            
                
        </div>
    );
};
    

export default Recommend