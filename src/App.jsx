import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<NoPage />} />

      </Routes>
    </>
  )
}

export default App
