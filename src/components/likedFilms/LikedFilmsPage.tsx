import React, { FC, useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface Icard {
    _id: string
    img: string;
    name: string;
}

const LikedFilmsPage: FC = () => {
    const [films, setFilms] = useState ( [] )
    
    useEffect(() => {
        const getFilms = async() => {
            const response = await axios.get('http://localhost:8080/likedFilms')
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
    
        <Container>
            <h1 style = {{padding: '100px', color: 'white'}}>Добавлено в понравившиеся:</h1>
            <div>
                {
                    films.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
                }
            </div>
        </Container>
       
    )
} 

export default LikedFilmsPage