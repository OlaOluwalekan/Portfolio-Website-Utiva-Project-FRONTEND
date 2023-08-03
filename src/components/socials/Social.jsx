import { Link } from 'react-router-dom'

const Social = ({ icon, path }) => {
  return (
    <Link to={path} target='_blank'>
      {icon}
    </Link>
  )
}
export default Social
