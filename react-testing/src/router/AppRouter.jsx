import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import AboutPage from '../pages/about/AboutPage'
import ErrorPage from '../pages/error/ErrorPage'
import Users from '../pages/users/Users'
import UserPage from '../pages/user/UserPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter