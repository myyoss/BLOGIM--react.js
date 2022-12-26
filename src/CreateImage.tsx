import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateImage = () => {

    const [title, setTitle] = useState('Image')
    const [body, setBody] = useState('This image is the most amazing image I have ever taken')
    const [author, setAuthor] = useState('Yossi As')
    const [image, setImg]: any = useState('https://i.insider.com/5ecfe8683ad86118977c07c3?width=750&format=jpeg&auto=webp');
    const [date, setDate]: any = useState();

    const [isPanding, setIsPanding]: any = useState(false)
    const history = useNavigate()


    useEffect(() => {
        const date = new Date();
        let newDate = date.toLocaleTimeString('he-IL', { day: 'numeric', month: 'numeric', year: '2-digit', hour: '2-digit', minute: '2-digit' });
        setDate(newDate)
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setIsPanding(true)

        const gallery = { title, body, author, date, image };

        fetch('http://localhost:8000/gallery/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gallery)
        }).then(() => {
            setIsPanding(false)
            history('/gallery')
        })
    }


    return (
        <div className='createImage'>
            <h2>Add new Image</h2>

            <form onSubmit={handleSubmit}>
                <label>Image title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Image description:</label>
                <textarea
                    id="textarea"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Image Author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label>Enter your Image:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImg(e.target.value)}
                />

                {!isPanding && <button>Add Image</button>}
                {isPanding && <button disabled>Adding image...</button>}
                {/* can use onclick on button instead onSubmit on form like this: */}
                {/* <button onClick={handleSubmit}>Add Blog</button> */}

            </form>
        </div>
    )
}

export default CreateImage