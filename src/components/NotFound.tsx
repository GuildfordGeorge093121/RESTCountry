import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImg from '../Asset/404-Error.svg'


const NotFound = () => {
  return (
    <div className='not-found'>
        <div className="container">
            <div style={{width: "450px"}}>
                <img src={notFoundImg} alt="" />
            </div>
            <div className="not-found-content">
                <h1 className='text'>Page Not Found</h1>
                <a href="/" className="link btn home-btn">
                    <div>
                        <span>Go Home</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NotFound