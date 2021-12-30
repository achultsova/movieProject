import React, { FC, useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import client from '../../axios/axiosInstance'
import notify from '../../toasts'
import './watchedFilms.scss'


interface Icard {
    _id: string
    img: string;
    name: string;
}

const WatchedFilmsPage: FC = () => {
    const [films, setFilms] = useState ( [] )
    const token = document.cookie
    
    useEffect(() => {
        const filmLast = JSON.parse(localStorage.getItem('films') || '[]')
        if(localStorage.getItem('films') === null) {
            notify('В последние просмотренные еще ничего не добавлено')
        } else {
            const getFilms = async() => {
                const response = await client.post('/watchedFilms', filmLast, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                setFilms(response.data)
            }
            getFilms()
        }
        
    }, [])

    const RenderCard: FC<{ card: Icard }> = ({ card }) => (
        <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid #141414', 'width': '12rem', margin: '15px', flexWrap: 'wrap'}} className = "mb-3 text-center card">
            <Card.Img src = { card.img } style = {{'height': '16rem'}} alt="Film photo" variant = "top"/>
            <Card.Body>
                <Link to={`/aboutfilm/${card._id}`} style = {{'color': 'white'}}>{ card.name }</Link> 
            </Card.Body>
        </Card>
    )

    return (
    
        <Container className='container' style={{minHeight: '700px'}}>
            <h1 style = {{padding: '50px', color: 'white'}}>Последние просмотренные:</h1>
            <div className='cards'>
                {
                    films.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
                }
            </div>
        </Container>
       
    )
} 

export default WatchedFilmsPage