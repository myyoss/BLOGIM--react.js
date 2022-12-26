import React, { useState } from 'react'



const SearchGallery = ({ gallery }: any) => {

    const [searchTerm, setSearchTerm]: any = useState('')
    const [title, setTitle]: any = useState('')
    const [modal, setModal] = useState(false);
    const [bigImage, setBigImage]: any = useState('');
    const [image, setImage]: any = useState('');

    const toggleModal = (e: any, image: any) => {

        setModal(!modal);
        console.log(e.src, image.title)
        setBigImage(e.src)
        setImage(image)

    };

    return (
        <div>
            <div className='title-search-photographer'>
                <input type="text" placeholder=' Search Photographer...' onChange={(e) => { setSearchTerm(e.target.value); setTitle(e.target.value) }} />
                <div className='title-gallery'>
                    {searchTerm && <h1 className='serchingTitle'> {`${title}'s`} Gallery</h1>}
                    {!searchTerm && <h1> Gallery</h1>}
                    <div><img src="images/gallery.png" alt="" /></div>
                </div>
            </div>

            <div className='gallery-list' >
                {gallery && gallery.filter((image: any) => {
                    if (searchTerm === '') {
                        return gallery
                    } else if (image.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return image
                    }
                }).map((image: any) => (
                    <div className='gallery-list'>
                        <div key={image.id} className='gallery-preview'>
                            <p onClick={(e) => toggleModal(e.target, image)}>
                                <img src={image.image} alt="img" />
                            </p>
                            <p><b>Title:</b> {image.title}</p>
                            <p><b>Photo by:</b> {image.author}</p>
                            <p><b>Description:</b> {image.body}</p>
                        </div>
                    </div>
                ))}

                {modal && bigImage && image &&
                    (<div className="modal">
                        <div className="modal-content"></div>
                        <div onClick={(e) => toggleModal(e.target, image)} className="overlay">
                            <div className="modal-content" >
                                <h2>{image.title} / {image.author}</h2>
                            
                                {<a href={bigImage} target="_blank" ><p className='hover-text'>Open full size</p> <p><img src={bigImage} alt="img" /></p></a>}
                                <button className="close-modal" onClick={(e) => toggleModal(e.target, image)}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default SearchGallery