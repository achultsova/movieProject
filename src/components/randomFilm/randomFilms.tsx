import React, { FC } from 'react'
import './randomFilms.scss'
import film1 from './posters/film1.jpg'
import film2 from './posters/film2.jpg'
import film3 from './posters/film3.jpg'


const RandomFilms: FC = () => (
    <div className = "random_films">
        <div className = "film_div">
                <img src= {film1} alt="фильм" className = "film_img"/>
        </div>
        <div className = "film_div">
                <img src= {film2} alt="фильм" className = "film_img"/>
        </div>
        <div className = "film_div">
                <img src= {film3} alt="фильм" className = "film_img"/>
        </div>
        
    </div>
)
   

export default RandomFilms;