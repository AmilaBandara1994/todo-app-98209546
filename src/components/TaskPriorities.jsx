import React,{useContext} from 'react'
import Chart from 'chart.js/auto';
import CardLayout from './CardLayout'
import TaskContext from '../context/TaskContext';
import {  Pie } from 'react-chartjs-2';





const dataSource = [
  {name:'High', value:10 }, 
  {name:'MEDIUM', value:23 }, 
  {name: 'LOW', value:11 }, 

]



const TaskPriorities = () => {
//   const [setData] = useContext(TaskContext);
// console.log(setData);

  const pie={
    labels: dataSource.map((data) => data.name),
    datasets : [
      {
        data: dataSource.map((data) => data.value),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
        ],
      
      }
    ]
  };


  const options = {
    legend: {
      position: "right"
    },
  
  };

  return (
    <CardLayout name='Tasks Priorities'>

      <div>
        <Pie data={pie} options={options}  />
      </div>
    
    </CardLayout>
  )
}

export default TaskPriorities