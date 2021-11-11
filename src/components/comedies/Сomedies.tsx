import React, { FC } from 'react'
import './comedies.scss'
import { Card} from 'react-bootstrap'

import movie1 from './comedyfilms/movie1.jpg'
import movie2 from './comedyfilms/movie2.jpg'
import movie3 from './comedyfilms/movie3.jpg'
import movie4 from './comedyfilms/movie4.jpg'
import movie5 from './comedyfilms/movie5.png'
import movie6 from './comedyfilms/movie6.jpg'

interface Icard {
    image: string;
    link: string;
}

const Comedies: FC = () => {
    const cardInfo: Icard[] = [
        {image: movie1, link: "Отпетые мошенницы"},
        {image: movie2, link: "За бортом"},
        {image: movie3, link: "Девушки бывают разные"},
        {image: movie4, link: "Удалить историю"},
        {image: movie5, link: "Семейный бюджет"},
        {image: movie6, link: "Родные"},
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
        <div className = "comedy_films">
            <div className= "m_c">
                <h3 className = "comedies">Комедии:</h3>
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
    

export default Comedies