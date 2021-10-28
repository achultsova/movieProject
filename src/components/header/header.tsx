import React, { FC } from 'react'
import './header.scss'
import Search from '../search/search'
import logo from './icons/logo.svg' 
import Registration from '../registration/registration'
import Signin from '../signin/signin'

const Header: FC = () => (
    <header className="header">
        <div className="header_content">
            <a href = "#">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <a href = "#">
                <span>Фильмы</span>
            </a>
            <a href = "#">
                <span>Сериалы</span>
            </a>
            <a href = "#">
                <span>Мультфильмы</span>
            </a>
            <a href = "#">
                <span>Шоу</span>
            </a>
            <a href = "#">
                <span>Коллекции</span>
            </a>
            <a href = "#">
                <span>График кинопремьер</span>
            </a>
            <Search />
            <Registration />
            < Signin />
        </div>
    </header>
)

export default Header
