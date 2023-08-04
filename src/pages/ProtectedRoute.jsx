import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { admin } = useSelector((store) => store.admin)

  if (!admin) {
    return <Navigate to='/admin/login' />
  }

  return <>{children}</>
}
export default ProtectedRoute
