import React from 'react'

import "../Components.css"

const Movie = (props) => {
  return (
    <div className="movie">
          <div className="movie-image">
            image
          </div>
          <h2>{props.name}</h2>
          <h3>Review: {props.review}</h3>
    </div>
  )
}

export default Movie