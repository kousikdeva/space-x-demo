import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackButton from '../components/BackButton'
import { randomImages } from '../mock/rocketsImgDetails'
import rocketsServices from '../service/rocketsServices'
import { randomObject } from '../utils/helper'
import InfoCard from '../components/InfoCard'
import LoadingSpinner from '../components/LoadingSpinner'

const buttonContainer = {
  padding: '0px 50px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}

const Rockets = () => {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])

  useEffect(() => {
    const callBack = async () => {
      const { data } = await rocketsServices.listRockets()
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
      {info < 1 && <LoadingSpinner />}
      <div style={buttonContainer}>
        <BackButton style={{ position: 'absolute', left: 50 }}>&#60; Back</BackButton>
        <h2 style={{ color: 'white' }}>Launches</h2>
      </div>
      <div className='history-container'>
        {info.map(item => <InfoCard title={item.rocket_name} info={item} key={item.id} onClick={() => handleClickCard(item.rocket_id)} />)}
      </div>
    </div>
  )
}

export default Rockets