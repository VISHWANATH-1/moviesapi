import React, { useContext, useEffect, useState,} from 'react'
import "./Movies.css"
import Card from '../Card/Card';
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';
const Movies = () => {
  const [moviesData,setMoviesData]=useState([])
  useEffect(()=>{
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res)=>{setMoviesData(res.data)})
  },[])
  return (
    < >
      { moviesData?.map((values,index)=>{
          return (
          <div className="main-con">
            <div key={index} className='card-container'>
            <Card name={values.show.name} type={values.show.type} languge={values.show.language} genres={values.show.genres} images={values.show.image?.medium} />
              
            </div>
            </div>
          )
        })
      }
       
        
    </>
  )
}

export default Movies


