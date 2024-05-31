import React from 'react'
import css from './ActivityFeed.module.css'
import avatar1 from "../assets/icons/Avatar-1.svg";
import avatar2 from "../assets/icons/Avatar-2.svg";

const ActivityFeed = ({ avatar='avatar1', title='Kushantha Charuka created Contract #00124 need John Beige’s signature', date='Sep 16, 2022 at 11:30 AM'}) => {
  return (
    <div className={css.activity_feed}>
      { avatar=== "avatar1" ? <img src={avatar1} alt="Dashboard SVG" /> :<img src={avatar2} alt="Dashboard SVG" />}
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <div className={css.date}>{date}</div>
      </div>
    </div>
  )
}

export default ActivityFeed