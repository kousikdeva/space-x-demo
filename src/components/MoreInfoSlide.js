import React, { useEffect, useRef, useState } from 'react'
import BackButton from './BackButton'

const imageStyle = {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
    padding: 0,
    margin: 0
}

const btnContainer = { margin: '10px' }

const MoreInfoSlide = ({ details, description = 'description' }) => {
    const triggerRef = useRef(null)
    const [display, setDisplay] = useState(false)

    const onIntersect = (e) => {
        if (e[0].isIntersecting === true)
            setDisplay(true)
    }

    const options = {
        threshold: 0.5,
        root: document
    }

    useEffect(() => {
        if (triggerRef.current) {
            const container = triggerRef.current
            const observer = new IntersectionObserver(onIntersect, options)
            observer.observe(container)
            return () => {
                observer.disconnect()
            }
        }
    }, [triggerRef, onIntersect, options])


    const infoContainer = {
        opacity: display ? 1 : 0,
        transition: 'all 0.5s ease-in-out',
        transform: display ? 'translateY(0px)' : 'translateY(50px)'
    }

    return (
        <div className='more-info-slide-container'>
            <div style={btnContainer}>
                <BackButton>&#60; Back</BackButton>
            </div>
            <img style={imageStyle} src={details.image} alt={details?.rocket_name || details?.title || details?.mission_name} />
            <div style={infoContainer} ref={triggerRef}>
                <p style={{ color: "#808B96" }}>{details.launch_date}</p>
                <h2 style={{ color: 'white' }}>{details?.rocket_name}</h2>
                <h2 style={{ color: 'white' }}>{details?.title}</h2>
                <h2 style={{ color: 'white' }}>{details?.mission_name}</h2>
                <p style={{ color: 'white' }}>{description}</p>
            </div>

        </div>
    )
}

export default MoreInfoSlide