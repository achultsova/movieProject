import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App'
import store from './store/store';




ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>        
    </CookiesProvider>
    ,
    document.getElementById('root'),
)
