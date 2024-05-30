import React from 'react'
import css from './ActivityFeed.module.css'
import avatar from "../assets/icons/Avatar-1.svg";

const ActivityFeed = ({ }) => {
  return (
    <div className={css.activity_feed}>
      <img src={avatar} alt="Dashboard SVG" />
      <div className={css.content}>
        <div className={css.title}>Kushantha Charuka created Contract #00124 need John Beige’s signature</div>
        <div className={css.date}>Sep 16, 2022 at 11:30 AM</div>
      </div>
    </div>
  )
}

export default ActivityFeed