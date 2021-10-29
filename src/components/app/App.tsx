import React, { FC } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../home/home'
import Header from '../header/header';


const App: FC = () => (
    <>
    <div className="App">
        <Header />
        <Home />
    </div>
    </>
)

export default App
