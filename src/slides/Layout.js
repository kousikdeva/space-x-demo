import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div style={{}}>
            <AppBar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout