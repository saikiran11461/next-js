import React from 'react'
import "../../styles/Contact.css"
const Contact = () => {
  return (
    <div> 
        <div className="container">
          <div className="form-div">
              <div className="content-div">
                <img width={"100%"} height={"100%"} src="https://source.unsplash.com/1600x900/?movies" alt="" />
              </div>
              <div className="right-form">
                  <input type="text" placeholder='name' /> <br />
                  <input type="text" placeholder='email' /><br />
                  <textarea name="" id="" cols="68" rows="10"></textarea><br />
                  <button>submit</button>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Contact