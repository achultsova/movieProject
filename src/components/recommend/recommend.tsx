import React, { FC } from 'react'
import './recommend.scss'
import movie1 from './recmovies/movie1.jpg'
import movie2 from './recmovies/movie2.jpeg'
import movie3 from './recmovies/movie3.jpg'
import movie4 from './recmovies/movie4.jpg'
import movie5 from './recmovies/movie5.jpg'
import movie6 from './recmovies/movie6.jpg'

const Recommend: FC = () => ( 
    <div className = "recommend">
        <a> 
            <h3 className = "rec">Рекомендуем:</h3>
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

export default Recommend