import React from 'react'
import media_1 from "../../images/media_1.png"
const Movies = () => {
  return (
    <div >
        <Card name={"vishwanath"} languge={"haha"} genres={"hhhh"} image={"media_1"} />
        
    </div>
  )
}

export default Movies


export const  Card =({name,languge,genres,image,})=>{
    return (
        <div  style={{width:"300px",height:'400px',border:'1px solid grey',borderRadi :"5px"}}>
            <img  src= {media_1.png}  alt="moviesImage" />
            <div>
                <h3>Movies Name: {name}</h3>
                <h4>Movies Name: {name}</h4>
            </div>

            

        </div>
    )
}