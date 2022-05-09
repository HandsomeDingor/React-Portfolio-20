import React from 'react'
import {FaDownload} from 'react-icons/fa'

function Resume() {

  return (
    <div className="row p-5 d-flex justify-content-center" >
        <div className='col-sm-6 p-5'>
        <h1>RESUME</h1>
          <a className='m-5'
            href="https://github.com/HandsomeDingor/React-Portfolio-20/raw/main/src/assets/resume/Junjie%20Wu%20-%20Resume_PDF.pdf"
          >
           <FaDownload size={70}/> Download Resume
          </a>
          </div>
          <div className='col-sm-6 p-5'>
            <h1>Skills</h1>
            <h2>Front End:</h2>
            <span>HTML5, CSS3, JAVASCRIPT ES6+, API, Bootstrap, Google Fonts and jQuery</span>
            <h2>Back End:</h2>
            <span>Node.js, Database (MySQL, MySql2, Sequelieze,NoSQL(MongoDB)), Express, Bcrypt, Express-session, Express-Handlebars, Handlebars, Controllers (API Route), REACT</span>
            <h2>JavaScript framework</h2>
            <span>MERN (MongoDB, Express, React, Node)</span>
            <h2>IDE:</h2>
            <span>Visual Studio Code</span>
          </div>
    </div>
  )
}

export default Resume