import { Link } from 'react-router-dom'

const Skill = ({ id, name, image, learnText, learnVideo }) => {
  return (
    <section>
      <article>
        <img src={image} alt={`${name} photo`} />
      </article>
      <section>
        <p>Learn {name}?</p>
        <article>
          <span>
            Text:{' '}
            <Link to={learnText.link} target='_blank'>
              {learnText.site}
            </Link>{' '}
          </span>
          <span>
            Video:{' '}
            <Link to={learnVideo.link} target='_blank'>
              {learnVideo.site}
            </Link>{' '}
          </span>
        </article>
      </section>
    </section>
  )
}
export default Skill
