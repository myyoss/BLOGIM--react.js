import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Blogim!</h1></Link>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor: '#f1356d',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight:'bold'
                }}>Home</Link>
                <Link to="/create" style={{
                    backgroundColor: '#f1356d',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight:'bold'
                }}>New Blog</Link>
                 <Link to="/gallery" style={{
                    backgroundColor: '#35a0f1',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight:'bold'
                }}>Gallery</Link>
                <Link to="/createImage" style={{
                    backgroundColor: '#35a0f1',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight:'bold'
                }}>New Image</Link>
            </div>
        </nav>
    )
}

export default Navbar