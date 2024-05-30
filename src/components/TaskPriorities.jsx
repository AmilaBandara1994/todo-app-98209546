import React from 'react'
import CardLayout from './CardLayout'
import vector from "../assets/icons/Vector.svg";

const TaskPriorities = () => {
  return (
    <CardLayout name='Tasks Priorities'>
        <img src={vector} alt="Priority SVG" /> 
    </CardLayout>
  )
}

export default TaskPriorities