import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './personalAccount.scss'



const PersonalAccount: FC = () => (
   <section className='personal_page' style={{height: "900px"}}>
       <h1 style={{paddingTop:"120px", color: "white"}}>{localStorage.getItem('username')}</h1>
       <h4 style={{color:'white'}}>{localStorage.getItem('email')}</h4> 
        <div>
            <Link to='#' className='watch_later'>Смотреть позже</Link>    
        </div>  
   </section>
    
)

export default PersonalAccount