import React, { FC } from 'react'
import './horrors.scss'
import { Card} from 'react-bootstrap'

import movie1 from './horrormovies/movie1.jpg'
import movie2 from './horrormovies/movie2.jpg'
import movie3 from './horrormovies/movie3.jpg'
import movie4 from './horrormovies/movie4.png'
import movie5 from './horrormovies/movie5.jpg'
import movie6 from './horrormovies/movie6.jpg'

interface Icard {
    image: string;
    link: string;
}

const Horrors: FC = () => {
    const cardInfo: Icard[] = [
        {image: movie1, link: "Заклятие"},
        {image: movie2, link: "Коллекционер 2"},
        {image: movie3, link: "Синистер"},
        {image: movie4, link: "Астрал 4"},
        {image: movie5, link: "Проклятие"},
        {image: movie6, link: "Не стучи дважды"},
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
        <div className = "horror_films">
            <div className= "m_c">
                <h3 className = "horrors">Ужасы:</h3>
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
    

export default Horrors