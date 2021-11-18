import React, { FC } from 'react'
import './App.scss'
import {
BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from '../home/home'
import Header from '../header/HeaderComponent';
import Films from '../films/Films';
import Series from '../seriesPage/Series';
import Show from '../showPage/Show';
import Cartoons from '../cartoons/Сartoons';
import Collections from '../collections/collections';
import PrimeSchedule from '../primeSchedulePage/PrimeSchedule';
import Footer from '../footer/Footer';
import Registration from '../registration/registration';
import PersonalAccount from '../personalAccountPage/PersonalAccount';
import ModalSignIn from '../header/modalSignIn/ModalSignIn';
import PrivateRoute from '../../privateRoute';



const App: FC = () => (
    <div className="App">
        <Router> 
        <Header />
            <Switch>
                <Route path = "/films" component = {Films} />
                <Route path = "/series" component = {Series} />
                <Route path = "/shows" component = {Show} />
                <Route path = "/cartoons" component = {Cartoons} />
                <Route path = "/collections" component = {Collections} />
                <Route path = "/primeSchedule" component = {PrimeSchedule} />
                <Route path = "/registration" component = {Registration} />
                {/* <Route path="/login" component= {ModalSignIn}/> */}
                <PrivateRoute path = "/account" component = {PersonalAccount} />
                <Route path = "/" component = {Home} />
            </Switch>
            <Footer />
            <Switch>
                <Route path={`*/login`}>
                    <ModalSignIn show={true} />
                </Route>
            </Switch>
        </Router>
    </div>
)

export default App
