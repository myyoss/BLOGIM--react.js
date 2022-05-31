import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound404 from './NotFound404';
import Gallery from './Gallery';
import Footer from './Footer';
import CreateImage from './CreateImage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/createImage' element={<CreateImage />}></Route>
            <Route path='/blogs/:id' element={<BlogDetails />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='*' element={<NotFound404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
