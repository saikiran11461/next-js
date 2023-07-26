"use client"
import { useRouter } from 'next/router'
import React from 'react'
import "../../../styles/SinglePage.css"



const userid = async({params}) => {
    const {userid} = params;

    let res = await fetch(`http://localhost:8080/movies/${userid}`)
    let data = await res.json();
   // console.log("data here",data)

  
  return (
    <div> 
        <div className='container'>
           <div className='flex-container'>
           <div className='left'>
              <img width={"100%"} src={data.Poster} />
           </div>
            <div className='right'>
                <h2>{data.Title}</h2>
                <p>The moving images of a film are created by photographing actual scenes with a motion-picture camera, by photographing drawings or miniature models using traditional animation techniques, by means of CGI and computer animation, or by a combination of some or all of these techniques, and other visual effects.</p>
                <h3>{data.Year}</h3>
                <h3>{data.Runtime}</h3>
            </div>
           </div>
        </div>  
    </div>
  )
}

export default userid