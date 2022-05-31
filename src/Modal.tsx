import React, { useState } from "react";
import "./Modal.css";

function Modal({ gallery, title }: any) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (

    <div className='gallery'>
      <h1>{title}</h1>
      <div className='gallery-list'>

        {modal && gallery.map((image: any) => (
          <div key={image.id} className='gallery-preview'>
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>{image.title} / {image.author}</h2>
              <p><img src={image.image} alt="img" /></p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        ))};

      </div>
    </div>)


               
// {modal && (<div className="modal">

// <div onClick={toggleModal} className="overlay"></div>

// <div className="modal-content">
//     <h2>{image.title} / {image.author}</h2>
//     <p><img src={image.image} alt="img" /></p>
//     <button className="close-modal" onClick={toggleModal}>
//         CLOSE
//     </button>
// </div>
// </div>)}
}

export default Modal