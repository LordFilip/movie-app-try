import { Link } from 'react-router-dom'
import styles from './HomePage.module.css' // Optional: for custom styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/homepage">Movie List</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
