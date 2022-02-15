import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
  );
}

export default App;
