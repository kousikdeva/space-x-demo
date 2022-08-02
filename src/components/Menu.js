import React from 'react'

const Menu = ({ children, isActive, onClick }) => {
    const style = {
        '&:hover': {
            '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left'
            }
        }
    }
    return <span onClick={onClick}> <p style={style} className='hover-underline-animation'>{children}</p></span>
}

export default Menu