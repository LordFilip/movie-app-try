const MovieCard = ({ movie }) => {
  return (
    <div className="cardContainer">
      <div className="row">
        <h1>{movie.movie}</h1>
        <h2>Rating: {movie.rating}</h2>
        <img src={movie.image} />
      </div>
      <button>Add to Favourites</button>
    </div>
  )
}

export default MovieCard
