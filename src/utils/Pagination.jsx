import React from 'react'
import css from './Pagination.module.css'

const Pagination = ({postPerPage , totalPosts , paginate}) => {
    const pageNumbers= [];

    for(let i =1; i<= Math.ceil(totalPosts/ postPerPage); i++){
        pageNumbers.push(i);

    }
  return (
    <nav >
        <ul className={css.pagination}>
            {
                pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)} className={css.page_item}>
                        {number}
                    </li>   
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination