import Link from '../components/Link/Link'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <Link text='Admin' path='/admin' />
      <Skills />
      <Projects />
    </div>
  )
}
export default Home
