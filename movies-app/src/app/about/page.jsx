import React from 'react'
import "../../styles/HomePage.css"
import Link from 'next/link'
const about = () => {
  return (
    <div>
       <>
       <div className="container">
          <div className="header">
            <div className="content">
                <div className="innerdiv">
                <h1>We are here for give Quality output to watch movies</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dolore voluptates illum a? Culpa, delectus aut explicabo ad optio itaque.</p>
                  <Link href={"/movies"}><button>watch here</button></Link>
                </div>
            </div>
            <div className="image">
              <img src="https://www.transparentpng.com/thumb/movie/movie-png-strip--wzAxso.png" alt="" />
            </div>
          </div>
       </div>
    </>
    </div>
  )
}

export default about