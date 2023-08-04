import { useSelector } from 'react-redux'
import Skill from './Skill'
import { skillsData } from './skills-data'
import styles from './skills.module.css'

const Skills = () => {
  const { darkMode } = useSelector((store) => store.general)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>My Skills</h2>
        <div>
          {skillsData.map((skill) => {
            return <Skill key={skill.id} {...skill} />
          })}
        </div>
      </div>
    </div>
  )
}
export default Skills
