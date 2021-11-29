import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import loginAction from '../../actions/loginAction'
import pencil from './icons/pencil.svg'
import './personalAccount.scss'
import tile from './icons/tile.svg'
import bell from './icons/bell.svg'
import watches from './icons/history.svg'
import heart from './icons/heart.svg'
import change from './icons/change.svg'
import logout from './icons/logout.svg'




const PersonalAccount: FC = () => {

    const dispatch = useDispatch(); 

    const history = useHistory();

    const handleClick = () => {
        dispatch(loginAction.logout())
        history.push("/");
        window.location.reload();
    }

    return(
        <section className='profile_v'>
        <div className='personal_page' >
            <div className='container'>
                <div className='profile_menu'>
                    <div className='profile_menu_info'>
                        <div> <h1 style={{paddingTop:"120px", color: "white"}}>{localStorage.getItem('username')}</h1> </div>
                    </div>
                    <div className='profile_menu_item'>
                    <a href='#'><img src={pencil} className='img_edit'></img>Редактировать</a>
                    </div>
                </div>
            <div className='account_options'>
                <ul className="profile_options">
                    <li >
                        <a href="#">
                            <div><img src={tile} className='options_img'></img></div>
                            <div className='options_text'>Смотреть<br/>позже</div>                        
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div><img src={bell} className='options_img'></img></div>
                            <div className='options_text'>Уведомления</div>                        
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div><img src={watches} className='options_img'></img></div>
                            <div className='options_text'>Просмотры</div>                        
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <div><img src={heart} className='options_img'></img></div>
                            <div className='options_text'>Любимые<br/>категории</div>                        
                        </a>
                    </li>
                </ul>
            </div> 
            <div>
                <a href='#' className='change_password'>
                  <div className='change_img'><img src={change}></img></div> 
                  <div className='change_text'>Сменить пароль</div> 
                </a>
            </div>  
            <div>
                <a href='#' className='change_password'>
                  <div className='change_img'><img src={logout}></img></div> 
                  <div className='change_text'><button className='btn_logout' onClick={handleClick}>Выйти</button></div> 
                </a>
            </div>  
            </div>    
        </div>
    </section>
    )
}

export default PersonalAccount