import React, { FC } from 'react'
import './App.scss'
import Header from '../header/header'
import RandomFilms from '../randomFilm/randomFilms'
import Recommend from '../recommend/recommend'
import New from '../new/new'

const App: FC = () => (
    <div className="App">
        <Header />
        <RandomFilms />
        <Recommend />
        <New />
    </div>
)

export default App
