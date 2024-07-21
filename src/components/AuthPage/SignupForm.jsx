import { useState } from 'react'
import styles from './AuthPage.module.css'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LoginForm = ({ formChanging }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false) // State to manage password visibility

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/homepage')
  }

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const validateInputs = () => {
    const newErrors = {}
    const { email, password, confirmPassword } = inputs

    if (!email || !password || !confirmPassword) {
      newErrors.fields = 'All fields must be filled'
      setErrors(newErrors)
      setShowErrorModal(true)
      return false
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address'
    }

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setShowErrorModal(true)
      return false
    }

    setErrors({})
    setShowErrorModal(false)
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateInputs()) {
      handleNavigate()
    }
  }

  const handleFocus = () => {
    setErrors({})
    setShowErrorModal(false)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
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
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`${styles.input} ${
              (errors.email ||
                errors.password ||
                errors.confirmPassword ||
                errors.fields) &&
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
          <div className={styles.inputWrapper}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${
                (errors.email ||
                  errors.password ||
                  errors.confirmPassword ||
                  errors.fields) &&
                !isFocused
                  ? styles.errorInput
                  : styles.normalInput
              }`}
            />
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm password:
          </label>
          <div className={styles.inputWrapper}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`${styles.input} ${
                (errors.email ||
                  errors.password ||
                  errors.confirmPassword ||
                  errors.fields) &&
                !isFocused
                  ? styles.errorInput
                  : styles.normalInput
              }`}
            />
          </div>
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
