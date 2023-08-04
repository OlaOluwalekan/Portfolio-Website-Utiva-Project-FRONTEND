import { useDispatch, useSelector } from 'react-redux'
import styles from '../css/admin-login.module.css'
import { useState } from 'react'
import { loginAdmin } from '../features/adminSlice'
import { useEffect } from 'react'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { darkMode } = useSelector((store) => store.general)
  const { admin } = useSelector((store) => store.admin)
  const dispatch = useDispatch()

  // console.log(admin)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      console.log('email is required')
      return
    }
    if (!password) {
      console.log('password is required')
      return
    }
    dispatch(loginAdmin({ email, password }))
    // console.log({ email, password })
  }

  useEffect(() => {
    console.log(admin)
  }, [admin])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
export default AdminLogin
