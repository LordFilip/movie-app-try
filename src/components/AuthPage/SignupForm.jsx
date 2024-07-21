import { useState } from 'react'
import styles from './AuthPage.module.css'

const LoginForm = ({ formChanging }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isFocused, setIsFocused] = useState(false) // New state to track focus

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const validateInputs = () => {
    const newErrors = {}
    const { email, password, confirmPassword } = inputs

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address'
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setShowErrorModal(true)
      return false
    }

    setErrors({})
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateInputs()) {
      // Handle successful validation
      console.log('Form submitted successfully')
    }
  }

  const handleFocus = () => {
    setIsFocused(true) // Set focus state to true
    if (showErrorModal) {
      setShowErrorModal(false)
    }
  }

  const handleBlur = () => {
    setIsFocused(false) // Set focus state to false
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row2}>
          <h2>Sign in</h2>
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
            onBlur={handleBlur}
            className={`${styles.input} ${
              (errors.email || errors.password || errors.confirmPassword) &&
              !isFocused
                ? styles.errorInput
                : styles.normalInput
            }`}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password" className={styles.label}>
            Your password:
          </label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${styles.input} ${
              (errors.email || errors.password || errors.confirmPassword) &&
              !isFocused
                ? styles.errorInput
                : styles.normalInput
            }`}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${styles.input} ${
              (errors.email || errors.password || errors.confirmPassword) &&
              !isFocused
                ? styles.errorInput
                : styles.normalInput
            }`}
          />
        </div>
        <div className={styles.row}>
          <p>
            Already have an account? <span onClick={formChanging}>Log in</span>
          </p>
        </div>
        <div className={styles.row2}>
          <button type="submit">Sign In</button>
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
