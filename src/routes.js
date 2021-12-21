import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Login from './pages/login'
import RegistUser from './pages/registUser'
import UserPage from './pages/user'


const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/registUser" element={<RegistUser />} />
                <Route exact path="/user" element={<UserPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Routing;
