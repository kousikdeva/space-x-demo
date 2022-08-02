import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from '../components/BackButton'
import InfoCard from '../components/InfoCard'
import launchesServices from '../service/launchesService'
import { randomImages } from '../mock/rocketsImgDetails'
import { randomObject } from '../utils/helper'
import LoadingSpinner from '../components/LoadingSpinner'

const buttonContainer = {
  padding: '0px 50px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}

const Launches = () => {
  const [info, setInfo] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const callBack = async () => {
      const { data } = await launchesServices.listLaunches()
      let newData = data.map(item => ({ ...item, image: randomObject(randomImages).image }))
      setInfo(newData)
    }
    callBack()
  }, [])

  const handleClickCard = (id) => {
    navigate(`${id}`)
  }

  return (
    <div style={{ backgroundColor: 'black', padding: '100px 0px', minHeight: '100vh' }}>
      {info.length < 1 && <LoadingSpinner />}
      <div style={buttonContainer}>
        <BackButton style={{ position: 'absolute', left: 50 }}>&#60; Back</BackButton>
        <h2 style={{ color: 'white' }}>Launches</h2>
      </div>
      <div className='history-container'>
        {info.map((item, index) => <InfoCard title={item.mission_name} info={item} key={index} onClick={() => handleClickCard(item.flight_number)} />)}
      </div>
    </div>
  )
}

export default Launches