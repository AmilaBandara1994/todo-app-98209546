import React from 'react'
import css from './NotificationLayout.module.css'
import Notification from './Notification'
const NotificationLayout = () => {
  return (
    <div className={css.notification_layout}  >
        <Notification name='John Deo' description='The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.' link='Look here for more information'/>
    </div>
  )
}

export default NotificationLayout