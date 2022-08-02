import React, { useEffect, useRef, useState } from 'react'

const imageStyle = {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
    padding: 0,
    margin: 0
}

const BasicInfoSlide = ({ info = {}, onClick }) => {
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

    const containerStyle = { position: 'relative' }

    const infoContainer = {
        position: 'absolute',
        top: '60%',
        left: '10%',
        opacity: display ? 1 : 0,
        transition: 'all 0.5s ease-in-out',
        transform:display?'translateY(0px)':'translateY(50px)'
    }
    return (
        <div style={containerStyle} >
            <div style={infoContainer} ref={triggerRef}>
                <p style={{ color: 'white', textTransform: 'uppercase', fontSize: '20px', margin: 0 }}>Recent launches</p>
                <p style={{ color: 'white', textTransform: 'uppercase', fontSize: '40px', margin: 0, fontWeight: 600 }}>{info.mission_name}</p>
                <button onClick={onClick} className='square-button'>Learn More</button>
            </div>
            <img style={imageStyle} src={info.image} alt={info.mission_name}/>
        </div>
    )
}

export default BasicInfoSlide