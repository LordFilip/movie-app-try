import styles from './AuthPage.module.css'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const LoginForm = ({ formChanging }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.row2}>
          <h2>Log in</h2>
        </div>
        <div className={styles.row}>
          <label htmlFor="name" className={styles.label}>
            Your email:
          </label>
          <input
            type="email"
            className={styles.input}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="name" className={styles.label}>
            Your password:
          </label>
          <input
            type="password"
            className={styles.input}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <p>
            Do not have an account yet.{' '}
            <span onClick={formChanging}>Sign in</span>
          </p>
        </div>
        <div className={styles.row2}>
          <button onClick={() => console.log(inputs)}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
