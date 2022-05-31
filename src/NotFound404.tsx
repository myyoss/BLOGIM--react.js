import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div  className='notFound'>
        <h2>SORRY...</h2>
        <p>File not found.</p>
        <Link to='/'>Back to homepage {'>'}</Link>

    </div>
  )
}

export default NotFound404