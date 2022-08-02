import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../assets/space-x-logo.png'
import IconButton from './IconButton'
import Menu from './Menu'
import { appBarDetails } from '../constants/appBarDetails'

const Container = {
    width: '100%',
    background: 'none',
    position: 'absolute',
    zIndex: 1,
}
const largeScreenContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '64px',
    alignItems: 'center',
    padding: '0px 40px'
}

const largeScreenMenuStyle = {
    overflow: 'hidden',
    display: 'flex',
    columnGap: '30px',
    color: 'white'
}

const mobileScreenContainer = {
    padding: '0px 40px',
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const mobileMenuStyle = {
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    textAlign: 'center'
}


const AppBar = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isLargeScreen, setLargeScreen] = useState(window.matchMedia("(min-width: 600px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 600px)").addEventListener('change', e => setLargeScreen(e.matches))
    }, [])

    if (isMobileMenuOpen) {
        window.onscroll = function (e) { handleMenu() }
    }

    const handleClickMobileLogo = () => {
        navigate('/')
        setMobileMenuOpen(false)
    }
    
    const handleClickLogo = () => {
        navigate('/')
    }

    const handleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const menu = <div style={largeScreenContainer}>
        <span style={{ cursor: 'pointer' }} onClick={handleClickLogo}>
            <img src={logo} height='30px' width='auto' alt='logo'/>
        </span>
        <div style={largeScreenMenuStyle}>
            {appBarDetails.map(item => <NavLink
                key={item.id}
                to={item.route}>
                {({ isActive }) => <Menu onClick={handleMenu} isActive={isActive}>{item.title}</Menu>}
            </NavLink>)}
        </div>
    </div>

    const mobileMenu = <div style={mobileScreenContainer}>
        <span style={{ cursor: 'pointer', position: 'absolute', zIndex: 10 }} onClick={handleClickMobileLogo}>
            <img src={logo} height='20px' width='auto' alt='logo'/>
        </span>
        <IconButton
            onClick={handleMenu}
            style={{ right: 20 }}>
            &#9776;
        </IconButton>
        <div style={{ ...mobileMenuStyle, width: isMobileMenuOpen ? '100%' : 0, display: isMobileMenuOpen && 'block' }}>
            <IconButton
                onClick={handleMenu}
                style={{ top: 10, right: 20 }}>
                &times;
            </IconButton>
            {appBarDetails.map(item => <NavLink
                style={{ display: 'block', transition: '0.3s' }}
                key={item.id}
                to={item.route}>
                {({ isActive }) => (<> <Menu onClick={handleMenu} isActive={isActive}>{item.title}</Menu></>)}
            </NavLink>)}
        </div>
    </div>

    return (
        <div style={Container}>
            {isLargeScreen ? menu : mobileMenu}
        </div>
    )
}

export default AppBar