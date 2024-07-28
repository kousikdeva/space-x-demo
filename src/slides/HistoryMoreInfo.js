import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MoreInfoSlide from '../components/MoreInfoSlide'
import { GET_HISTORY, CLEAR_HISTORY } from '../constants/actionType'

const HistoryMoreInfo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { history } = useSelector((state) => state.historyReducer)

  useEffect(() => {
    dispatch({ type: GET_HISTORY, payload: { id: params?.id } })
    return () => dispatch({ type: CLEAR_HISTORY })
  }, [])

  return (
    <div style={{ backgroundColor: 'black' }}>
      <MoreInfoSlide description={history.details} details={history} />
    </div>
  )
}

export default HistoryMoreInfo