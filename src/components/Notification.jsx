import React from 'react'
import css from './Notification.module.css'
import closesvg from "../assets/icons/Close.svg";

const close= () => {
  
}

const Notification = ({ name='John Doe' , 
description='The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.', 
link='Look here for more information'}) => {
  return (
        <div className={css.notification}>
          <div className={css.content}>
            <div className={css.title}> Welcome back, {name}</div>
            <div className={css.description}>{description}</div>
            <div className={css.link}><a href="#">{link}</a></div>
          </div>
          <div className={css.close} onClick={()=> close}>
            <img className={css.image} src={closesvg} alt="Close SVG" />
          </div>
        </div>
  )
}

export default Notification