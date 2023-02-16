import React, { useEffect } from 'react'
import "./Movies.css"
import axios from 'axios'
const Movies = () => {
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
            console.log(res.data);
        }
        getData();
    });
  return (
    <div >
        <Card name={"vishwanath"} languge={"haha"} genres={"hhhh"} image={"media_1"} />
        
    </div>
  )
}

export default Movies


export const  Card =({name,languge,genres,image,type})=>{
    return (
        <div className="cards">
        <img
          className="cards__img"
          src={data.image} alt=""
        />
        <div className="cards__overlay">
          <div className="card__name">
            {data.name}
          </div>
          <div className="card__type">
            {data.type}
            <span className="card__language">
              {data.languge}
            </span>
          </div>
          <div className="card__genres">
            {data.genres }
          </div>
        </div>
      </div>
    )
}