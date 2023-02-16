import './App.css';
import Navbar from './component/navbar/Navbar';
import Movies from './component/movies/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter >
     <Navbar/>
     <Routes>
     <Route  path='/movies' element={<Movies />} />
     <Route  path='/' element={<Movies />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
