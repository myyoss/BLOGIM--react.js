
// import "./Modal.css";
// import React, { useEffect, useState } from "react";
// import Modal from "./Modal";
const GallerryList = ({ gallery, title }: any) => {

    // const [modal, setModal] = useState(false);
    // const [bigImage, setBigImage]: any = useState('');
    // const [image, setImage]: any = useState('');

    // const toggleModal = (e: any, image: any) => {

    //     setModal(!modal);
    //     console.log(e.src, image.title)
    //     setBigImage(e.src)
    //     setImage(image)
        
    //     if (!modal) {
    //         document.body.classList.add('active-modal')

    //     } else {
    //         document.body.classList.remove('active-modal')
    //     }
    // };

    return (

        <div className='gallery'>
            {/* <h1>{title}</h1>
            <div className='gallery-list'>
                {gallery.map((image: any) => (
                    <div key={image.id} className='gallery-preview'>
                        <p onClick={(e) => toggleModal(e.target, image)}>
                            <img src={image.image} alt="img" />
                        </p>
                        <p><b>Title:</b> {image.title}</p>
                        <p><b>Photo by:</b> {image.author}</p>
                        <p><b>Description:</b> {image.body}</p>
                    </div>
                ))}

                {modal && bigImage && image &&
                    (<div className="modal">
                        <div onClick={(e) => toggleModal(e.target, image)} className="overlay">
                            <div className="modal-content">
                                <h2>{image.title} / {image.author}</h2>
                                <p><img src={bigImage} alt="img" /></p>
                                <button className="close-modal" onClick={(e) => toggleModal(e.target, image)}>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div> */}
        </div>
    )
}

export default GallerryList