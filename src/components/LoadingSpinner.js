import React from 'react'
import loading from '../assets/loading.gif'

const LoadingSpinner = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <img src={loading} width='50px' />
        </div>
    )
}

export default LoadingSpinner