import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MoreInfoSlide from '../components/MoreInfoSlide'
import { GET_LAUNCHER } from '../constants/actionType'


const MoreInfo = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { launcher } = useSelector((state) => state.launcherReducer)

    useEffect(() => {
        dispatch({ type: GET_LAUNCHER, payload: { id: params.id } })
    }, [])

    return (
        <div style={{ backgroundColor: 'black' }}>
            <MoreInfoSlide description={launcher.details} details={launcher} />
        </div>
    )
}

export default MoreInfo