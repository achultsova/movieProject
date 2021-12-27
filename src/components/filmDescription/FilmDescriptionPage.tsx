import React, { FC, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { AxiosResponse } from 'axios'
import client from '../../axios/axiosInstance'
import './filmDescriptionPage.scss'
import like from './icons/like.svg'
import notify from '../../toasts'

const FilmDescriptionPage: FC = () => {
    const [film, setFilm] = useState ( {
        img: '',
        name: '',
        description: '',
    } )
    const {id} = useParams<{id?: string}>() 
    const usersid = localStorage.getItem('userid')
    localStorage.setItem('filmid', JSON.stringify(id))

    useEffect(() => {
        const saveLastFilms = () => {
            let films: string [] = []
            if (localStorage.getItem('films') === null) {
                films.push(id || '')
                localStorage.setItem('films', JSON.stringify(films))
            } else {
                films= JSON.parse(localStorage.getItem('films') || '[]')
                if (!films.includes(id || '')) {
                    films.push(id || '')
                    localStorage.setItem('films', JSON.stringify(films))
                }    
            }
        }
        saveLastFilms()
    }, [])
    
    useEffect(() => {
        if (id) {
            const getFilms = async() => {
                const response = await client.post('/descriptionFilm', {id}, {
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

    const handleClick = (e: React.MouseEvent<HTMLElement>) => { 
        e.preventDefault()
        const data = {
            id: usersid,
            filmid: id
        }
        client.post('/likes', data, {               
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${document.cookie}`
            }, 
            
        })
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    notify('Фильм добавлен к понравившимся')
                } else if (response.status === 401) {
                    notify('Фильм уже был добавлен к понравившимся')
                } else {
                    notify('Что-то пошло не так')
                }
            })       
    }

    return (
        <Container>
            <div className='filmDesc'>
                <h1 style={{color: 'white'}} className='nameFilm'>{film.name}</h1>
                <div className='desc'>
                    <img src={film.img} className='imgFilm'/>
                    <h4 style={{color: 'white'}}>{film.description}</h4>
                </div> 
            </div>
            <div className='liked' onClick={handleClick}>  
                <div className='textLike'><button className='btn_logout'>Нравится</button></div>
                <div><img className='imgLike'src={like} alt='постер фильма'></img></div>      
            </div>     
        </Container>
    )
}

export default FilmDescriptionPage