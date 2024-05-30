import React from 'react'
import css from './CardLayout.module.css'

const CardLayout = ({children, name="Tasks"}) => {
  return (
    <div className={css.card_outer} >
      <div className={css.title}>{name}</div>
      <div className={css.content}>
        {children}        
      </div>
    </div>
  )
}

export default CardLayout