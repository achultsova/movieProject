import React, { FC } from 'react'
import { Carousel } from 'react-bootstrap'
import film1 from './posters/film1.jpg'
import film2 from './posters/film2.jpg'
import film3 from './posters/film3.jpg'




const Slider: FC = () => (
    <>
        <Carousel>
           <Carousel.Item style = {{'height': '600px'}}>
               <img src = { film1 } className = "d-block w-100" alt = "first slide" />
               <Carousel.Caption>
                   <h3 >Однажды в Голливуде</h3>
               </Carousel.Caption>
           </Carousel.Item >
           <Carousel.Item style = {{'height': '600px'}}> 
               <img src = { film2 } className = "d-block w-100" alt = "first slide" />
               <Carousel.Caption>
                   <h3>Легенда 17</h3>
               </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item style = {{'height': '600px'}}>
               <img src = { film3 } className = "d-block w-100" alt = "first slide" />
               <Carousel.Caption>
                   <h3>Железный человек</h3>
               </Carousel.Caption>
           </Carousel.Item>
        </Carousel>     
    </>
)

export default Slider