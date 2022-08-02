import React, { useEffect, useRef, useState } from 'react'

const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const InfoCard = ({ info, onClick, title = 'title' }) => {
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

    const containerStyle = {
        opacity: display ? 1 : 0,
        transition: 'all 0.5s ease-in-out',
        transform: display ? 'translateY(0px)' : 'translateY(50px)'
    }
    return (
        <div style={containerStyle} ref={triggerRef}>
            <span className='info-card-container' onClick={onClick}>
                <img loading={'lazy'} src={info.image} style={imgStyle} alt={title}/>
                <div className='glass'>
                    <p style={{ color: 'white' }}>{title}</p>
                </div>
            </span>

        </div>
    )
}

export default InfoCard