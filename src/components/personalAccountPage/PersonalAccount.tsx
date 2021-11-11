import React, { FC } from 'react'

import './personalAccount.scss'



const PersonalAccount: FC = () => (
    <section className='profile_v'>
        <div className='personal_page' >
            <div className='container'>
                <h1 style={{paddingTop:"120px", color: "white"}}>{localStorage.getItem('username')}</h1>
                <h4 style={{color:'white'}}>{localStorage.getItem('email')}</h4> 
            </div>    
        </div>
    </section>
   
    
)

export default PersonalAccount