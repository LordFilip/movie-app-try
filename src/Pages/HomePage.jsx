import { useState } from 'react'
import Search from '../components/HomePage/Search'
import MovieCard from '../components/HomePage/MovieCard'
import styles from './Pages.module.css'
import Navbar from '../components/HomePage/Navbar'

const HomePage = () => {
  const [movie, setMovie] = useState(null)

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Search setMovie={setMovie} />
        </div>
        <div className={styles.movieCardContainer}>
          {movie && <MovieCard movie={movie} />}
        </div>
      </div>
    </>
  )
}

export default HomePage
