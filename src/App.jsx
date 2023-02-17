import './App.css';
import Navbar from './component/navbar/Navbar';
import Movies from './component/movies/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {GlobalContext} from "./GlobalContext"
import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviesDetails from "./component/MoviesDetails/MoviesDetails"

function App() {
 const  value = {moviesData};

  return (
    <BrowserRouter >
    <GlobalContext.Provider  >
    <div className="App">
     <Navbar/>
     <Routes>
     <Route  path='/movies' element={<Movies />} />
     <Route  path='/' element={<Movies />} />
     <Route  path='/details' element={<MoviesDetails/>} />
     </Routes>
    </div>
    </GlobalContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
