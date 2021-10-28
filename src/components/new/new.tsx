import React, { FC } from 'react'
import './new.scss'
import movie1 from './newmovies/movie1.jpg'
import movie2 from './newmovies/movie2.jpeg'
import movie3 from './newmovies/movie3.jpg'
import movie4 from './newmovies/movie4.jpg'
import movie5 from './newmovies/movie5.jpg'
import movie6 from './newmovies/movie6.jpg'

const New: FC = () => ( 
    <div className = "recommend">
        <a> 
            <h3 className = "rec">Новинки:</h3>
        </a>
        <div className = "rec_films">
            <div className = "movie_div">
                <img src = {movie1} className = "movie_img"></img>
            </div>
            <div className = "movie_div">
                <img src = {movie2} className = "movie_img"></img>
            </div>
            <div className = "movie_div">
                <img src = {movie3} className = "movie_img"></img>
            </div>
            <div className = "movie_div">
                <img src = {movie4} className = "movie_img"></img>
            </div>
            <div className = "movie_div">
                <img src = {movie5} className = "movie_img"></img>
            </div>
            <div className = "movie_div">
                <img src = {movie6} className = "movie_img"></img>
            </div>
        </div>
    </div>
)

export default New