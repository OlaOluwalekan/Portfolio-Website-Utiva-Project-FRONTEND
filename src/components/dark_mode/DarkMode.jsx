import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './darkmode.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../../features/generalSlice'

const DarkMode = () => {
  const { darkMode } = useSelector((store) => store.general)
  const dispatch = useDispatch()

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {!darkMode ? <FaMoon /> : <FaSun />}
    </div>
  )
}
export default DarkMode
