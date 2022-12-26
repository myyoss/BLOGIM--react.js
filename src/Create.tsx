import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const [title, setTitle] = useState('My Blog')
  const [body, setBody] = useState("Where does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\n")
  const [author, setAuthor] = useState('yossi')
  const [date, setDate]: any = useState();
  const [img, setImg]: any = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RWHO_ItDM66Uol3WboX1tlgVGJjxRfM_uA&usqp=CAU');

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

    const blog = { title, body, author, date, img };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPanding(false)
      history('/')
    })
  }


  return (
    <div className='create'>
      <h2>Add a new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          id="textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>

          <option value="yossi">Yossi</option>
          <option value="avi">Avi</option>
          <option value="shimi">Sami</option>
        </select>
        <label>Author Image:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        {!isPanding && <button>Add Blog</button>}
        {isPanding && <button disabled>Adding blog...</button>}
        {/* can use onclick on button instead onSubmit on form like this: */}
        {/* <button onClick={handleSubmit}>Add Blog</button> */}

      </form>
    </div>
  )
}

export default Create