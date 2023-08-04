import { useDispatch, useSelector } from 'react-redux'
import styles from './projects.module.css'
import { useEffect } from 'react'
import { getProjects } from '../../features/generalSlice'
import Project from './Project'

const Projects = () => {
  const { darkMode, projects, isLoading } = useSelector(
    (store) => store.general
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>Projects</h2>
        <section>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            projects.map((project) => {
              return <Project key={project._id} {...project} />
            })
          )}
        </section>
      </div>
    </div>
  )
}
export default Projects
