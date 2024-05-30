import React from 'react'
import Navbar from './components/Navbar'
import LeftPanel from './components/LeftPanel'
import TaskList from './components/TaskList'
import ActivityFeedLayout from './components/ActivityFeedLayout'
import TaskPriorities from './components/TaskPriorities'
import NotificationLayout from './components/NotificationLayout'

const App = () => {
  return (
    <div className='dashboard'>
        <div className="left">
            <LeftPanel />
        </div>
        <div className="right">
            <Navbar />  
            <div className="notification-bar">
                <NotificationLayout />
            </div>
            <div className="content">
                <div className="inner-left">
                    <TaskList />
                </div>
                <div className="inner-right">

                    <div className="activity-feed">
                        <ActivityFeedLayout />
                    </div>
                    <div className="tasks-priorities">
                        <TaskPriorities />
                    </div>
                </div>                
            </div>

        </div>
    </div>
  )
}

export default App