import useFetch from './useFetch'
// import GallerryList from './GallerryList'
import Spinners from './Spinners'
import Modal from './Modal'
import SearchGallery from './SearchGallery'

const Gallery = () => {

    const { isPanding, data: gallery, error } = useFetch('http://localhost:8000/gallery/')

    return (
        <div>
            {isPanding && <div className='loading'><Spinners /></div>}
            {error && <div>{error}</div>}
            {gallery && <SearchGallery gallery={gallery}/>}
            {/* {<div><img src={gallery} alt="" /></div>} */}
            {/* {gallery && <GallerryList gallery={gallery} title='Gallery' />} */}
            {gallery && <Modal gallery={gallery}/>}
           
        </div>
    )
}

export default Gallery


