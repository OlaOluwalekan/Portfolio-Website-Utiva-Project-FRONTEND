import { Link } from 'react-router-dom'

const Project = ({ id, name, image, liveUrl, repoUrl, tags }) => {
  return (
    <section>
      <div>
        <img src={image} alt={`${name} photo`} />
        <article>
          <Link to={repoUrl} target='_blank'>
            Source Code
          </Link>
          <Link to={liveUrl} target='_blank'>
            Live Site
          </Link>
        </article>
      </div>
      <article>
        <p>{name}</p>
        <article>
          {tags.map((tag, i) => {
            return <span key={i}>{tag}</span>
          })}
        </article>
      </article>
    </section>
  )
}
export default Project
