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
{/* <img src="https://live.staticflickr.com/65535/51136428909_d4d6cf76ae_o.jpg" width="3000" height="2000" alt="Crew-2 Mission"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */ }
{/* <img src="https://live.staticflickr.com/2790/32852846842_6f1f7b26b9_o.jpg" width="3000" height="2000" alt="Falcon 9 and Dragon lift off from Launch Pad 39A for CRS-10"> */ }
export default Layout