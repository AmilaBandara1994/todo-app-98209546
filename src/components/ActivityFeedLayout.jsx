import React from 'react'
import ActivityFeed from './ActivityFeed'
import CardLayout from './CardLayout'
import css from './ActivityFeedLayout.module.css'

const ActivityFeedLayout = () => {
  return (
    <CardLayout name='Activity Feed'>
      <div className={css.activity_feed}>
          <ActivityFeed avatar='avatar1'
           title='Kushantha Charuka created Contract #00124 need John Beige’s signature'
           date='Sep 16, 2022 at 11:30 AM'
           />
          <ActivityFeed avatar='avatar2'
           title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'
           date='Sep 16, 2022 at 11:30 AM'
          />
          <ActivityFeed avatar='avatar2'
           title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque'
           date='Sep 16, 2022 at 11:30 AM'
          />
      </div>
    </CardLayout>
  )
}

export default ActivityFeedLayout