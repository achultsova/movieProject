import React, { FC } from 'react'
import './newFilms.scss'
import { Card} from 'react-bootstrap'

import movie1 from './newmovies/movie1.jpg'
import movie2 from './newmovies/movie2.jpeg'
import movie3 from './newmovies/movie3.jpg'
import movie4 from './newmovies/movie4.jpg'
import movie5 from './newmovies/movie5.jpg'
import movie6 from './newmovies/movie6.jpg'

interface Icard {
    image: string;
    link: string;
}

const NewFilms: FC = () => {
    const cardInfo: Icard[] = [
        {image: movie1, link: "Дюна"},
        {image: movie2, link: "Главный герой"},
        {image: movie3, link: "Телохранитель жены киллера"},
        {image: movie4, link: "Курорт"},
        {image: movie5, link: "Веном 2"},
        {image: movie6, link: "Не время умирать"},
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
        <div className = "new_films">
             <div className= "m_c">
                <h3 className = "new">Новинки:</h3>
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
    

export default NewFilms