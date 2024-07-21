import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authPage" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
