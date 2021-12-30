import React, { FC, useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import client from '../../axios/axiosInstance'
import notify from '../../toasts'

interface Icard {
    _id: string
    img: string;
    name: string;
}

const LikedFilmsPage: FC = () => {
    const [films, setFilms] = useState ( [] )
    const userId = localStorage.getItem('userid')
    const token = document.cookie

    useEffect(() => {
        const getFilms = async() => {
            const response = await client.post('/likedFilms', userId, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
                   
            if (response.status === 200) {
                setFilms(response.data)
            } else {
                notify('В понравившиеся фильмы еще ничего не добавлено')
            }          
        }
        getFilms()
    }, [])

    const RenderCard: FC<{ card: Icard }> = ({ card }) => (
        <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid #141414', 'width': '12rem'}} className = "mb-3 text-center card">
            <Card.Img src = { card.img } style = {{'height': '16rem'}} alt="Film photo" variant = "top"/>
            <Card.Body>
                <Link to={`/aboutfilm/${card._id}`} style = {{'color': 'white'}}>{ card.name }</Link> 
            </Card.Body>
        </Card>
    )

    return (
        <Container className='container' style={{minHeight: '700px'}}>
            <h1 style = {{padding: '50px', color: 'white'}}>Любимые фильмы:</h1>
            <div className='cards'>
                {
                    films.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
                }
            </div>
        </Container>      
    )
} 

export default LikedFilmsPage