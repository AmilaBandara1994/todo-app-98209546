import React from 'react'
import css from './LeftPanel.module.css'
import dashboardSvg from "../assets/icons/Dashboard.svg";

const LeftPanel = () => {
  return (
        <div className={css.left_panel}>
            
            <div className={css.left_panel_header}>
                Acmy Solutions
            </div>
            <div className={css.left_nav}>
                <ul>
                    <li><img src={dashboardSvg} alt="Dashboard SVG" /> Dashboard</li>
                </ul>
            </div>
        </div>
  )
}

export default LeftPanel