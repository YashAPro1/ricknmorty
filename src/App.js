import './App.css';
import CharacterInfo from './components/CharacterInfo';
import CharacterPage from './components/CharacterPage';
import HomePage from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div>
    <Navbar/>
      <div className='fullbg'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/character/:cardID" element={<CharacterPage />}/>
          {/* <Route path="episode/:episodeID" element={<Episode />}/> */}
        </Routes>
         
      </div>
      
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
