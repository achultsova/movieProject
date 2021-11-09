import React, { FC } from 'react'
import './App.scss'
import {
BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from '../home/home'
import Header from '../header/header';
import Films from '../films/films';
import Series from '../series/series';
import Show from '../show/show';
import Cartoons from '../cartoons/cartoons';
import Collections from '../collections/collections';
import PrimeSchedule from '../primeSchedule/primeSchedule';
import Footer from '../footer/footer';
import Registration from '../registration/registration';
import PrivateRoute from '../../privateRoute';



const App: FC = () => (
    <div className="App">
        <Router> 
        <Header />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/films" component = {Films} />
                <Route path = "/series" component = {Series} />
                <Route path = "/shows" component = {Show} />
                <Route path = "/cartoons" component = {Cartoons} />
                <Route path = "/collections" component = {Collections} />
                <Route path = "/primeSchedule" component = {PrimeSchedule} />
                <Route path = "/registration" component = {Registration} />
                <PrivateRoute path = "/account" component = {PrimeSchedule} />
            </Switch>
            <Footer />
        </Router>
    </div>
)

export default App
