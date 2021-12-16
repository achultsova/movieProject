import React, { FC, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import './filmDescriptionPage.scss'
import like from './icons/like.svg'


const FilmDescriptionPage: FC = () => {
    const [film, setFilm] = useState ( {
        img: '',
        name: '',
        description: '',
    } )
    const {id} = useParams<{id?: string}>()
    const {userid} = useParams<{userid?: string}>()
    

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


    const handleClick = () => { 
        debugger
        axios.post('http://localhost:8080/likes', {               
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            data: {
                id: userid,
                filmid: id
            }
        })
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    toast('фильм добавлен к понравившимся', {
                        position: toast.POSITION.TOP_CENTER,
                        className: 'toast-error', 
                        autoClose: 4000,
                        toastId: 1,
                        progressClassName: 'error-progress-bar',
                    })
                } else if (response.status === 401) {
                    toast('Ошибка подключения', {
                        position: toast.POSITION.TOP_CENTER,
                        className: 'toast-error', 
                        autoClose: 4000,
                        toastId: 1,
                        progressClassName: 'error-progress-bar',
                    })
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
                <div><img className='imgLike'src={like}></img></div>      
            </div>     
        </Container>
    )
}

export default FilmDescriptionPage