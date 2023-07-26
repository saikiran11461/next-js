import MoviesCard from '@/Components/MoviesCard';
import React from 'react'
import "../../styles/MoviesCard.css"
export async function getStaticProps(){
  let data = await fetch("http://localhost:8080/movies",{
    next:{
      revalidate:3
    }
  });
  let myprops = await data.json();
  return {
    props:{
      myprops
    },
  }
}
 
const movies = async(props) => {
    const {props:{myprops}} = await getStaticProps();
    //console.log(myprops)
  return (
    <div className='main-container'>
        <div className="movies-grid">

      {
        myprops?.map((item)=>(
          <MoviesCard key={item.id} id={item.id} title={item.Title} year={item.Year} runtime={item.Runtime} image={item.Poster}/>
          ))
        }
        </div>
    </div>
  )
}




export default movies