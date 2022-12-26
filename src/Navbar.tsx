import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Blogim!</h1></Link>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor: '#f1356dd6',
                    color: 'white',
                    borderRadius: '4px',
                    padding: 8,
                    paddingLeft: 18,
                    paddingRight: 18,
                    // fontWeight:'bold'
                }}>Home</Link>
                <Link className="btnLink" to="/create" style={{
                    backgroundColor: '#f1356dd6',
                    color: 'white',
                    borderRadius: '4px',
                    padding: 8,
                    paddingLeft: 18,
                    paddingRight: 18,
                    // fontWeight:'bold'
                }}>New Blog</Link>
                 <Link to="/gallery" style={{
                    backgroundColor: '#35a0f1b0',
                    color: 'white',
                    borderRadius: '4px',
                    padding: 8,
                    paddingLeft: 18,
                    paddingRight: 18,
                    // fontWeight:'bold'
                }}>Gallery</Link>
                <Link to="/createImage" style={{
                    backgroundColor: '#35a0f1b0',
                    color: 'white',
                    borderRadius: '4px',
                    padding: 8,
                    paddingLeft: 18,
                    paddingRight: 18,
                    // fontWeight:'bold'
                }}>New Image</Link>
            </div>
        </nav>
    )
}

export default Navbar