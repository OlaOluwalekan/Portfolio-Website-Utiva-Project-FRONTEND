import { NavLink } from 'react-router-dom'
import styles from './link.module.css'

const Link = ({ text, path }) => {
  return (
    <NavLink to={path} className={styles.main}>
      {text}
    </NavLink>
  )
}
export default Link
