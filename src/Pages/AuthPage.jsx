import LoginForm from '../components/AuthPage/LoginForm'
import SignupForm from '../components/AuthPage/SignupForm' // Corrected path
import { useState } from 'react'

function AuthPage() {
  const [isLogging, setIsLogging] = useState(false)
  const formChanging = () => {
    setIsLogging(!isLogging)
  }

  return (
    <>
      {isLogging ? (
        <LoginForm formChanging={formChanging} />
      ) : (
        <SignupForm formChanging={formChanging} />
      )}
    </>
  )
}

export default AuthPage
