import Search from './Search'
import Spinners from './Spinners'
import useFetch from './useFetch'

function Home() {
    const { isPanding, data: blogs, error } = useFetch('http://localhost:8000/blogs/')


    return (
        <div className='home'>
            {isPanding && <div className='loading'><Spinners /></div>}
            {error && <div>{error}</div>}
            {blogs && <Search blogs={blogs} />}
            {/* {blogs && <BlogList blogs={blogs} title='All blogs' />} */}
        </div>
    )
}

export default Home