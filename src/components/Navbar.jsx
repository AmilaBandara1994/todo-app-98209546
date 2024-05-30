import React from 'react'
import css from './Navbar.module.css'
import notificationsvg from "../assets/icons/Notification.svg";
import profile from "../assets/icons/Profile.svg";

console.log(css.nav);
const Navbar = () => {
  return (
     <nav className={css.nav}>
        <div className={css.company_name}>
            Dashboard
        </div>
        <div className={css.right_nav}>
            <ul>
                <li><img src={notificationsvg} alt="Notification SVG" /></li>
                <li>
                    <div className={css.profile_pic}>
                        <img src={profile} alt="Profile SVG" />    
                    </div>
                </li>
            </ul>
        </div>
     </nav>
  )
}

export default Navbar