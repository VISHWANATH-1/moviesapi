import React from 'react'

const MoviesDetails = () => {




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

export default MoviesDetails