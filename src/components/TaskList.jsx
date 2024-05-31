import {React, useState, useEffect} from 'react'
import Task from './Task'
import CardLayout from './CardLayout'
import Spinner from './Spinner';
import css from './TaskList.module.css'
import Pagination from '../utils/Pagination';

const TaskList = () => {

  const [tasks, setTasks]  = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8)
  // get current posts
  const indexOfLastPost  = currentPage * postPerPage;
  const indexOfFirstPost  = indexOfLastPost - postPerPage;
  const currentPosts = tasks.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate =(pageNumber) => setCurrentPage(pageNumber);

  const prev =() => {
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  };
  const nextPage =() => {
    if(currentPage <  Math.ceil(tasks.length / postPerPage))
    setCurrentPage(currentPage+1)
  };

  useEffect(() =>{
    const fetchTasks = async () => {
      try {
        const res = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        const data = await res.json();
        setTasks(data);     
      } catch (error) {
        console.log('Error fetching data ', error);
      }finally{
        setLoading(false);
      }
    }
    fetchTasks();
  },[]);

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function date(dateString) {
    let dateObject= new Date(dateString);
    
    dateObject = months[dateObject.getMonth()] + " " + dateObject.getDate();
    return dateObject;
  }

  return (
    <CardLayout name='Tasks'>
                { loading ? (
                      <Spinner loading={loading} />
                    ):(
                    <>
                      { currentPosts.map((task)=>(
                        <Task 
                        key={task.id} 
                        priority={task.priority} 
                        description={task.todo} 
                        status={task.completed} 
                        date={ date(task.createdAt)} 
                        />
                      ))
                      
                      }
                    </>
                  )
                  
                }
                <div className={css.pagination}>
                  <Pagination  
                  postPerPage={postPerPage} 
                  totalPosts={tasks.length} 
                  paginate={paginate} 
                  previous={prev} 
                  next={nextPage} 
                  
                  />
                
                </div>
    </CardLayout>
  )
}

export default TaskList;