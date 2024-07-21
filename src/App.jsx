import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import FavouritesPage from './Pages/FavouritesPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
