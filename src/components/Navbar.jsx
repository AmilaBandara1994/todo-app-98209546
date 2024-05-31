import React from 'react'
import css from './Navbar.module.css'
import notificationsvg from "../assets/icons/Notification.svg";
import chervon_down from "../assets/icons/Chevron-down.svg";
import profile from "../assets/icons/Profile.svg";

const Navbar = () => {
  return (
     <nav className={css.nav}>
        <div className={css.company_name}>
            Dashboard
        </div>
        <ul className={css.right_nav}>
            <li><img src={notificationsvg} alt="Notification SVG" /></li>
            <li>
                <div className={css.profile_pic}>
                    <img src={profile} alt="Profile SVG" />    
                    <img className={css.chervon} src={chervon_down} alt="Chervon-down SVG" />    
                </div>
            </li>
        </ul>
     </nav>
  )
}

export default Navbar