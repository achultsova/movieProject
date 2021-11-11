import React, { FC } from 'react'
import pencil from './icons/pencil.svg'
import './personalAccount.scss'



const PersonalAccount: FC = () => (
    <section className='profile_v'>
        <div className='personal_page' >
            <div className='container'>
                <div className='profile_menu'>
                    <div className='profile_menu_info'>
                        <div> <h1 style={{paddingTop:"120px", color: "white"}}>{localStorage.getItem('username')}</h1> </div>
                        <div> <h5 style={{color:'gray'}}>{localStorage.getItem('email')}</h5> </div> 
                    </div>
                    <div className='profile_menu_item'>
                    <a href='#'><img src={pencil} className='img_edit'></img>Редактировать</a>
                    </div>
                </div>
            {/* <div>
                <ul className="profile_menu">
                    <li>
                        <a className=''>Смотреть позже</a>
                    </li>

                </ul>
            </div>     */}
                
            </div>    
        </div>
    </section>
   
    
)

export default PersonalAccount