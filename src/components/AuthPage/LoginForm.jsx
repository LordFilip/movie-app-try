import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import styles from './AuthPage.module.css'

const LoginForm = ({ formChanging }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false) // State for password visibility

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/homepage') // Navigates to the AboutPage
  }

  const validateInputs = () => {
    const newErrors = {}

    // Check for empty fields
    if (!inputs.email || !inputs.password) {
      newErrors.fields = 'Please fill all fields!'
    }

    // Update the errors state
    setErrors(newErrors)

    // Show error modal if there are errors
    if (Object.keys(newErrors).length > 0) {
      setShowErrorModal(true)
      return false
    }

    setShowErrorModal(false)
    return true
  }

  const handleFocus = () => {
    setErrors({})
    setShowErrorModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form from submitting and causing page reload

    if (validateInputs()) {
      // Handle successful validation, e.g., submit the form
      handleNavigate()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row2}>
          <h2>Log in</h2>
        </div>
        <div className={styles.row}>
          <label htmlFor="email" className={styles.label}>
            Your email:
          </label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            onFocus={handleFocus}
            className={`${styles.input} ${
              errors.fields ? styles.errorInput : styles.normalInput
            }`}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password" className={styles.label}>
            Your password:
          </label>
          <div className={styles.inputWrapper}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              onFocus={handleFocus}
              className={`${styles.input} ${
                errors.fields ? styles.errorInput : styles.normalInput
              }`}
            />
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <p>
            Do not have an account yet.{' '}
            <span onClick={formChanging}>Sign in</span>
          </p>
        </div>
        <div className={styles.row2}>
          <button type="submit">Log In</button>
        </div>
      </form>
      {showErrorModal && (
        <div
          className={`${styles.errorModal} ${
            showErrorModal ? styles.show : styles.hide
          }`}
        >
          {Object.values(errors).join(', ')}
        </div>
      )}
    </div>
  )
}

export default LoginForm
