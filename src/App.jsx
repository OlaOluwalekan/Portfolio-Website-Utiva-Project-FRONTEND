import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import DarkMode from './components/dark_mode/DarkMode'
import { useSelector } from 'react-redux'
import ProtectedRoute from './pages/ProtectedRoute'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'

const App = () => {
  const { darkMode } = useSelector((store) => store.general)

  return (
    <div className={darkMode ? 'main dark' : 'main'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path='admin'
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path='admin/login' element={<AdminLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <DarkMode />
    </div>
  )
}

export default App
