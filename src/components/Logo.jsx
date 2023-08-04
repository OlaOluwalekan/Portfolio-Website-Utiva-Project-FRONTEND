import styles from '../css/navbar.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <article>
        Bells<span>Arena</span>
      </article>
    </Link>
  )
}
export default Logo
