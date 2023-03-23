import React from 'react'
import {Link} from 'react-router-dom'

function Front() {
  return (
    <div className='main'>
        <Link to="/CLogin">
        <button type="button" className="btn btn-primary">I am a Customer</button>
        </Link>
        <Link to="/PLogin">
        <button type="button" className="btn btn-primary">I am a Pharmacist</button>
        </Link>
    </div>
  )
}

export default Front
