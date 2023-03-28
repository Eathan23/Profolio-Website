import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Values from './pages/Values'
import Experience from './pages/Experience'
import Footer from './components/Footer'



function App() {
  return (
    <div className='box-1'>
      <div className='box-2'>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Values" element={<Values/>}/>
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
     </div>
    </div>
  );
}

export default App;
