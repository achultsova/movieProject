import React, { FC } from 'react'
import './moderncartoons.scss'
import { Card} from 'react-bootstrap'

import movie1 from './cartoons/cartoon1.png'
import movie2 from './cartoons/cartoon2.png'
import movie3 from './cartoons/cartoon3.png'
import movie4 from './cartoons/cartoon4.jpg'
import movie5 from './cartoons/cartoon5.jpg'
import movie6 from './cartoons/cartoon6.jpg'

interface Icard {
    image: string;
    link: string;
}

const ModernCartoons: FC = () => {
    const cardInfo: Icard[] = [
        {image: movie1, link: "Виво"},
        {image: movie2, link: "Монстры за работой"},
        {image: movie3, link: "Академия Монстров"},
        {image: movie4, link: "Рио"},
        {image: movie5, link: "Фердинанд"},
        {image: movie6, link: "Лило и Стич"},
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
        <div className = "modern_cartoons">
            <div className= "m_c">
                <h3 className = "m_cartoons">Современные мультфильмы:</h3>
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
    

export default ModernCartoons