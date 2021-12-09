import React, { FC,  useState, useEffect } from 'react'
import axios from 'axios'
import './moderncartoons.scss'
import { Card} from 'react-bootstrap'

interface Icard {
    name: string;
    img: string;
}

const ModernCartoons: FC = () => {
    const [films, setFilms] = useState ( [] )

    useEffect(() => {
        const getFilms = async() => {
            const response = await axios.get('http://localhost:8080/cartoonFilms')
            setFilms(response.data)
        }
        getFilms()
    }, [])
    
    const RenderCard: FC<{ card: Icard }> = ({ card }) => (
    
        <Card style = {{'color': 'white', 'background': '#141414', 'border': 'solid #141414', 'width': '12rem'}} className = "mb-3 text-center ">
            <Card.Img src = { card.img } style = {{'height': '16rem'}} alt="Film photo" variant = "top"/>
            <Card.Body>
                <Card.Link href = "/aboutfilm" style = {{'color': 'white'}}> { card.name } </Card.Link>
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
                    films.map((card: Icard, index: number) => (<RenderCard card ={ card } key = {index} />))
                }
            </div>
            
                
        </div>
    )
}
    

export default ModernCartoons