import React from 'react'

function BlogList({ blogs, title }: any) {

    // const blogs = props.blogs //when using (props) instead Destructuring {blogs, title}
    // const title = props.title

    return (
        <div className='blog-list'>
           
            {/* <h1>{title}</h1>
            {blogs.map((blog: any) => (
                    <div key={blog.id} className="blog-preview">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <div className='author'>Written by {blog.author} <div><img src={blog.img} alt="" /></div></div>
                            <p>{blog.date}</p>
                        </Link>
                    </div>
            ))} */}
        </div>
    )
}

export default BlogList

