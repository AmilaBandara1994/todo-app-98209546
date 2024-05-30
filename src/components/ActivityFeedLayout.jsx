import React from 'react'
import ActivityFeed from './ActivityFeed'
import CardLayout from './CardLayout'
import css from './ActivityFeedLayout.module.css'

const ActivityFeedLayout = () => {
  return (
    <CardLayout name='Activity Feed'>
      <div className={css.activity_feed}>
          <ActivityFeed />
      </div>
    </CardLayout>
  )
}

export default ActivityFeedLayout