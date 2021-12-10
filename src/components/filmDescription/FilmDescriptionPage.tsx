import React, { FC, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import axios from 'axios'
import './filmDescriptionPage.scss'


const FilmDescriptionPage: FC = () => {
    const [film, setFilm] = useState ( {
        img: '',
        name: '',
        description: '',
    } )
    const {id} = useParams<{id?: string}>()

    useEffect(() => {
        if (id) {
            const getFilms = async() => {
                const response = await axios.post('http://localhost:8080/descriptionFilm', {id}, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                setFilm(response.data)
                
            }
            getFilms()
        }    
    },[id])

    return (
        <Container>
            <div className='filmDesc'>
                <h1 style={{color: 'white'}} className='nameFilm'>{film.name}</h1>
                <div className='desc'>
                    <img src={film.img} className='imgFilm'/>
                    <h4 style={{color: 'white'}}>{film.description}</h4>
                </div> 
            </div>
            
        </Container>
    )
}

export default FilmDescriptionPage