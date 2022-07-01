import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import AboutPage from './pages/about/AboutPage'
import ErrorPage from './pages/error/ErrorPage'
import Users from './pages/users/Users'
import UserPage from './pages/user/UserPage'

const App = () => {
  return (
    <div>
      <Link to={'/'} data-testid="main-link">main</Link>
        <br />
      <Link to={'/about'} data-testid="about-link">about</Link>
        <br />
      <Link to={'/users'} data-testid="users-link">users</Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
