import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import Spinners from './Spinners'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPanding } = useFetch('http://localhost:8000/blogs/' + id)

    
    
    const history = useNavigate()
    const [deleteing, setDeliting]: any = useState(false)



    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            setDeliting(true)
            setTimeout(x, 2000)
        })
    }

    function x() {
        history('/')
    }


    return (
        <div className='blog-details'>
            {isPanding && <div className='loading'><Spinners/></div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className='written'>written by {blog.author} <img src={blog.img} alt="" /></p>
                    <p className='date'>{blog.date}</p>
                    <div className='blogBody'>{blog.body}</div>
                    {!deleteing && <button onClick={handleDelete}>delete</button>}
                    {deleteing && <button disabled>Deleting blog...</button>}<br></br>
                </article>
            )}
        </div>
    )
}

export default BlogDetails