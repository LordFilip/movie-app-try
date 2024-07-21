import { useState, useEffect } from 'react'
import styles from './HomePage.module.css'

const Search = ({ setMovie }) => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies') // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log(data)
        setMovies(data) // Assuming the API response is an array of movies
        setFilteredMovies(data) // Initialize filteredMovies
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  useEffect(() => {
    // Filter movies based on search query if search query is not empty
    if (searchQuery.trim() !== '') {
      const filtered = movies.filter((movie) =>
        movie.movie.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredMovies(filtered)
    } else {
      setFilteredMovies([]) // Clear filtered movies if search query is empty
    }
  }, [searchQuery, movies])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.searchContainer}>
      <h1>Movies List</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      {searchQuery.trim() === '' ? (
        <p>Please enter a search query.</p> // Optional message for empty input
      ) : (
        <ul className={styles.movieList}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <li
                key={movie.imdbID} // Using imdbID as the key
                onClick={() => {
                  setMovie(movie)
                  setFilteredMovies({})
                }}
                className={styles.movieItem}
              >
                {movie.movie}
              </li>
            ))
          ) : (
            <li>No movies found</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default Search
