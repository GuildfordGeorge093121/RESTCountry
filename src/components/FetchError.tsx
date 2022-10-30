import React from 'react'
import {RiWifiOffLine} from 'react-icons/ri'

const FetchError = () => {
  return (
    <div className='fetch-error'>
        <div className="container">
            <div className='fetch-error-img'>
                    <span className="icon"><RiWifiOffLine /></span>
            </div>
            <div className="fetch-error-content">
                <p className="error-header">
                    Connect to the Internet
                </p>
                <p className="error-statement">
                    You're offline. Check your connection.
                </p>
                <div><a href="/" className='btn home-btn text link'>Reload</a></div>
            </div>
        </div>
    </div>
  )
}

export default FetchError