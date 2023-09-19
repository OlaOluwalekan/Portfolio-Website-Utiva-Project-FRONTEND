import styles from '../css/resume.module.css'

const Resume = () => {
  const resumeLink =
    'https://res.cloudinary.com/dyyoorpns/image/upload/v1695117245/Bells%20Arena/static%20assets/pdf/resume_19092023.pdf'

  return (
    <div className={styles.main}>
      <embed src={resumeLink} height='100%' width='100%' />
    </div>
  )
}
export default Resume
