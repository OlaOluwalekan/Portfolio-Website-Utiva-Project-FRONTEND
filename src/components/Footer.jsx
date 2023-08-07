import { useSelector } from 'react-redux'
import styles from '../css/footer.module.css'
import Logo from './Logo'

const Footer = () => {
  const { darkMode } = useSelector((store) => store.general)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <article>
          <p>&copy;</p> <Logo /> <p>{new Date().getFullYear()}</p>
        </article>
      </div>
    </div>
  )
}
export default Footer
