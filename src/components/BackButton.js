import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({children, style}) => {
    const navigate = useNavigate()

    const handleButton = () =>{
        navigate(-1)
    }
  return (
    <button onClick={handleButton} style={{...style}} className='back-button'>{children}</button>
  )
}

export default BackButton