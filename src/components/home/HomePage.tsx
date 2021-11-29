import React, { FC } from 'react'
import Slider from './slider/Slider'
import Recommend from './recommend/Recommend'
import NewFilms from './newFilms/NewFilms'
import Horrors from './horrors/Horrors'
import ModernCartoons from './moderCartoons/Moderncartoons'
import Comedies from './comedies/Сomedies'

const Home: FC = () => (
    <>
    <Slider />
    <Recommend />
    <NewFilms />
    <Horrors />
    <ModernCartoons />
    <Comedies />
    </>
)

export default Home
 