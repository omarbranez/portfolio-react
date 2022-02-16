import './App.css';
import Landing from './Landing';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
    <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
