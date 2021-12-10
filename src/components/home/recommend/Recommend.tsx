import React, { FC, useState, useEffect } from 'react'
import './recommend.scss'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


interface Icard {
    _id: string
    img: string;
    name: string;
}

const Recommend: FC = () => {
    const [films, setFilms] = useState ( [] )
    

    useEffect(() => {
        const getFilms = async() => {
            const response = await axios.get('http://localhost:8080/recFilms')
            setFilms(response.data)
        }
        getFilms()
    }, [])


    const RenderCard: FC<{ card: Icard }> = ({ card }) => (
        <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid #141414', 'width': '12rem'}} className = "mb-3 text-center ">
            <Card.Img src = { card.img } style = {{'height': '16rem'}} alt="Film photo" variant = "top"/>
            <Card.Body>
                <Link to={`/aboutfilm/${card._id}`} style = {{'color': 'white'}}>{ card.name }</Link> 
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
                    films.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
                }
            </div>                            
        </div>
    )
}
    

export default Recommend