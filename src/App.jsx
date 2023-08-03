import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import DarkMode from './components/dark_mode/DarkMode'
import { useSelector } from 'react-redux'

const App = () => {
  const { darkMode } = useSelector((store) => store.general)

  return (
    <div className={darkMode ? 'main dark' : 'main'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <DarkMode />
    </div>
  )
}

export default App
