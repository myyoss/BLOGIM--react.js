import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Search = ({ blogs }: any) => {

    const [searchTerm, setSearchTerm]: any = useState('')
    const [title, setTitle]: any = useState('')

    return (
        <div className='blog-list'>
            <div className='title-search'>
                <input type="text" placeholder=' Search blogger...' onChange={(e) => { setSearchTerm(e.target.value); setTitle(e.target.value) }} />
                <div className='title-blog'>
                {searchTerm && <h1 className='serchingTitle'>All {`${title}'s`} Blogs</h1>}
                {!searchTerm && <h1>All blogs</h1>}
                <div><img src="images/blog.png" alt="" /></div>
                </div>
            </div>
            
            {blogs && blogs.filter((blog: any) => {
                if (searchTerm === '') {
                    return blogs
                } else if (blog.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return blog
                }
            }).map((blog: any) => (
                <div key={blog.id} className="blog-preview">
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <div className='author'>Written by {blog.author} <div><img src={blog.img} alt="" /></div></div>
                        <p>{blog.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Search