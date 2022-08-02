import React from 'react'

const IconButton = ({ children, onClick, style }) => {
    return <span className='icon-button' onClick={onClick} style={{ ...style }}>{children}</span>
}

export default IconButton