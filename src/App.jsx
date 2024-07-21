import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
