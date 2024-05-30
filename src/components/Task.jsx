import React from 'react'
import css from './Task.module.css'
import priority_high from "../assets/icons/Priority-High.svg";
import priority_low from "../assets/icons/Priority-Low.svg";
import priority_medium from "../assets/icons/Priority-Medium.svg";



const Task = ({priority="MEDIUM",description='Contract #00124 need John Beige’s signature',
    status='Done', date='Sep 16'
 }) => {
  return (
    <div className={css.task}>
        <div className={css.left}>

            { priority === 'HIGH' ?<img src={priority_high} alt="Priority SVG" /> : priority === 'MEDIUM' ? <img src={priority_medium} alt="Priority SVG" /> :<img src={priority_low} alt="Priority SVG" /> }
            
            <div className={css.description}>
                {description}
            </div>
        </div>

        <div className={css.right}>
            <div className={ status? css.done : css.in_progress} >
                {status ? 'Done':'In-Progress'}
            </div>
            <div className={css.date}>
                {/* { date} */}
                Sep 16
            </div>
        </div>
    </div>
  )
}

export default Task