import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ name, languge, genres, images, type }) => {
  const [detailsPage, setDetailsPage] = useState(false)
 const detaislPageData={
  name:name,
  language:languge,
  genres:genres,
  type:type

 }

const navigate=useNavigate()
  if (detailsPage) {
    navigate(`/details,{detaislPageData}`)
  }


  return (

    <div className="cards" onClick={() => setDetailsPage(true)}>

      <img
        className="cards__img"
        src={images} alt=""
      />
      <div style={{ padding: '5px', textAlign: "left" }}>
        <div className="card__name">
          <div>
            Name: {name}
          </div>
          <div >
            Type: {type}
            <div>
              Language: {languge}
            </div>
          </div>
          <div>
            Genres: {genres}
          </div>
        </div>
      </div>

    </div>
  )
}
export default Card;