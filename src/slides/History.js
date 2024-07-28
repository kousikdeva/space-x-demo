import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import BackButton from '../components/BackButton'
import InfoCard from '../components/InfoCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { GET_ALL_HISTORY } from '../constants/actionType'

const buttonContainer = {
  padding: '0px 50px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}

const History = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { allHistories } = useSelector((state) => state.historyReducer)

  useEffect(() => {
    dispatch({ type: GET_ALL_HISTORY })

  }, [])

  const handleClickCard = (id) => {
    navigate(`${id}`)
  }

  return (
    <div style={{ backgroundColor: 'black', padding: '100px 0px', minHeight: '100vh' }}>
      {allHistories?.length < 1 && <LoadingSpinner />}
      <div style={buttonContainer}>
        <BackButton style={{ position: 'absolute', left: 50 }}>&#60; Back</BackButton>
        <h2 style={{ color: 'white' }}>History</h2>
      </div>
      <div className='history-container'>
        {allHistories?.map(item => <InfoCard title={item.title} info={item} key={item.id} onClick={() => handleClickCard(item.id)} />)}
      </div>
    </div>
  )
}

export default History