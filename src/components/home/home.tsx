import React, { FC } from 'react'
import Slider from '../slider/slider'
import Recommend from '../recommend/recommend'
import New from '../new/new'
import Horrors from '../horrors/Horrors'
import ModernCartoons from '../moderncartoons/Moderncartoons'
import Comedies from '../comedies/comedies'

const Home: FC = () => (
    <>
    <Slider />
    <Recommend />
    <New />
    <Horrors />
    <ModernCartoons />
    <Comedies />
    </>
)

export default Home
 