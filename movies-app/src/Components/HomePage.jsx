import React from 'react'
import "../styles/HomePage.css"
import Link from 'next/link'
const HomePage = () => {
  return (
    <>
       <div className="container">
          <div className="header">
            <div className="content">
                <div className="innerdiv">
                <h1>We are welocme you</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dolore voluptates illum a? Culpa, delectus aut explicabo ad optio itaque.</p>
                  <Link href={"/movies"}><button>watch here</button></Link>
                </div>
            </div>
            <div className="image">
              <img src="https://cdn.pixabay.com/photo/2017/01/31/18/33/headings-2026281_1280.png" alt="" />
            </div>
          </div>
       </div>
    </>
  )
}

export default HomePage