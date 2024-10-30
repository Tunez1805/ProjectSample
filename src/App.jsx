import './App.css'
import Featured from './components/Featured'
import Featured2 from './components/Featured2'
import Featured3 from './components/Featured3'
import Footer from './components/Footer'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Recent from './components/Recent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/project' element={<Project />} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />
      
      {/* /*<Herosection/>*/ }
      {/* /*<Recent/>*/ }
      {/* /*<Featured/>*/ }
      {/* <Featured2/> */}
      {/* <Featured3/> */}
     </Routes>
     <Footer/>
    </BrowserRouter>

    
    
  )
}

export default App
