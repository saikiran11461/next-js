import React from 'react'
import "../styles/Movie.css"
import Link from 'next/link'





const MoviesCard = ({id,title,year,runtime,image}) => {
  // console.log("moves", movie)
  
  return (
    <div>
        <div className='main-card'>
            <img src={image} alt="" />
            <div className='card-content'>
                <h2>{title.slice(0,18)}...</h2>
                <p>{year}</p>
                <p>{runtime}</p>
               <Link href={`/movies/${id}`}> <button>more ..</button></Link>
            </div>
        </div>
    </div>
  )
}

export default MoviesCard