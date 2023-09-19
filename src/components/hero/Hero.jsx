import { useSelector } from 'react-redux'
import styles from './hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { darkMode } = useSelector((store) => store.general)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <section>
          <h2>
            Empowering Ideas, Delivering Excellence:{' '}
            <span>Meet a versatile Web Developer and Project Manager</span>
          </h2>
          <p>
            Hello, I'm Olalekan <span>Bells</span>, a versatile MERN Stack
            Developer and adept Project Manager. With a passion for crafting
            dynamic web applications and a knack for driving successful
            projects, I bring technical expertise and strategic leadership to
            every endeavor. Let's connect and create something extraordinary
            together. Welcome to my <span>Arena</span>
          </p>
          <Link
            to='https://res.cloudinary.com/dyyoorpns/image/upload/v1695117245/Bells%20Arena/static%20assets/pdf/resume_19092023.pdf'
            target='_blank'
          >
            View My Resume (CV)
          </Link>
        </section>
        <img
          src='https://res.cloudinary.com/dyyoorpns/image/upload/v1691060453/Bells%20Arena/static%20assets/hero/hero-image_dbmcwg.png'
          alt='hero-banner'
        />
      </div>
    </div>
  )
}
export default Hero
