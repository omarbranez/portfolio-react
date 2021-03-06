import './App.css';
import Construction from './pages/Construction';
import Landing from './Landing';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      {/* <Route path='/' element={<Landing/>}/> */}
      <Route path="*" element={<Construction/>}/>
      {/* <Route path='/blog' element={<Blog/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
