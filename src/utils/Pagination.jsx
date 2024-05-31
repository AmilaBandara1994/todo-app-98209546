import React from 'react'
import css from './Pagination.module.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

    const Pagination = ({postPerPage , totalPosts , paginate , previous, next}) => {
    const pageNumbers= [];

    for(let i =1; i<= Math.ceil(totalPosts/ postPerPage); i++){
        pageNumbers.push(i);

    }
  return (
    <nav >
        <ul className={css.pagination}>
            <li onClick={()=> previous()}><FaAngleLeft  color='#757575'/></li>
            {
                pageNumbers.map(number => (
                 
                    <li key={number} onClick={() => paginate(number)} className={css.page_item}>
                        {number}
                    </li>   
                ))
            }
            <li onClick={()=> next() } ><FaAngleRight color='#757575'/></li>
        </ul>
    </nav>
  )
}

export default Pagination