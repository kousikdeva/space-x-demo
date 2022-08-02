import React from 'react'
import { footerDetails } from '../constants/footerDetails'

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 'auto',
    height: '100px',
    padding: '0px 50px',
    columnGap: '30px',
    backgroundColor: 'black'
}

const menuItemStyle = {
    textDecoration: 'none',
    color: '#f1f1f1',
    margin: 0,
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 500
}
const logoStyle = {
    color: '#848a8f',
    fontWeight: 100,
    margin: 0,
    fontSize: '12px'
}


const Footer = () => {
    return (
        <div style={containerStyle}>
            <p style={logoStyle}>SPACEX &#169; 2022</p>
            {footerDetails.map(item =>
                <a key={item.id}
                    target="_blank"
                    style={menuItemStyle}
                    href={item.link}>
                    {item.title}
                </a>)}
        </div>
    )
}

export default Footer