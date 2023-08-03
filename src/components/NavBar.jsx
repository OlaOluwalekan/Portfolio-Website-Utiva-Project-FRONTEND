import Link from './Link/Link'
import Logo from './Logo'
import styles from '../css/navbar.module.css'
import Social from './socials/Social'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

const NavBar = () => {
  return (
    <header className={styles.main}>
      <div>
        <Logo />
        <nav>
          <Social
            path='https://twitter.com/OlaOluwalekanMi'
            icon={<FaTwitter />}
          />
          <Social
            path='https://web.facebook.com/OlaOluwalekanMi'
            icon={<FaFacebook />}
          />
          <Social path='https://github.com/OlaOluwalekan' icon={<FaGithub />} />
        </nav>
      </div>
    </header>
  )
}
export default NavBar
