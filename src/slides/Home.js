import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import BasicInfoSlide from '../components/BasicInfoSlide'
import LoadingSpinner from '../components/LoadingSpinner'
import { GET_UPCOMING_LAUNCHERS } from '../constants/actionType'

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { upcomingLaunchers } = useSelector((state) => state.launcherReducer)

  useEffect(() => {
    dispatch({ type: GET_UPCOMING_LAUNCHERS })
  }, [])

  const handleClick = (item) => {
    navigate(`launches/${item.flight_number}`)
  }
  return (

    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {upcomingLaunchers?.length < 1 && <LoadingSpinner />}
      {upcomingLaunchers?.map((item, index) => <BasicInfoSlide key={index} info={item} onClick={() => handleClick(item)} />)}
    </div>
  )
}

export default Home