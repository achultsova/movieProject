import React, { FC } from 'react'
import './App.scss'
import {
    BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home  from '../home/HomePage'
import Header from '../header/HeaderComponent'
import Films from '../films/FilmsPage'
import Series from '../seriesPage/Series'
import Show from '../showPage/Show'
import Cartoons from '../cartoons/СartoonsPage'
import Collections from '../collections/СollectionsPage'
import PrimeSchedule from '../primeSchedulePage/PrimeSchedule'
import Footer from '../footer/FooterPage'
import Registration from '../registration/RegistrationPage'
import PersonalAccount from '../personalAccountPage/PersonalAccount'
import ModalSignIn from '../header/modalSignIn/ModalSignIn'
import PrivateRoute from '../../privateRoute'
import FilmDescriptionPage from '../filmDescription/FilmDescriptionPage'
import LikedFilmsPage from '../likedFilms/LikedFilmsPage'
import WatchedFilmsPage from '../watchedFilms/WatchedFilmsPage'
import EditAccountPage from '../editAccount/EditAccountPage'



const App: FC = () => (
    <div className="App">
        <ToastContainer/>
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
                <Route path = "/aboutfilm/:id" component = {FilmDescriptionPage} />
                <Route path = "/likedFilms" component = {LikedFilmsPage} />
                <Route path = "/watchedFilms" component = {WatchedFilmsPage} />
                <Route path = "/account/editAccount" component = {EditAccountPage} />
                <PrivateRoute path = "/account/:userid" component = {PersonalAccount} />
                <Route path = "/" component = {Home} />
            </Switch>
            <Footer />
            <Switch>
                <Route path={'*/login'}>
                    <ModalSignIn show={true} />
                </Route>
            </Switch>
        </Router>
    </div>
)

export default App
