import React, { useContext } from 'react'
import { Context } from './ContextProvider'

const Footer = () => {

  const {data,night}= useContext(Context)
  return (
    <footer>
      <div className="container">
        
      </div>
    </footer>
  )
}

export default Footer