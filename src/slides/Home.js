import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BasicInfoSlide from '../components/BasicInfoSlide'
import { spaceCraft, defaultImage } from '../mock/rocketsImgDetails'
import launchesServices from '../service/launchesService'
import loading from '../assets/loading.gif'
import LoadingSpinner from '../components/LoadingSpinner'

const Home = () => {
  const [details, setDetails] = useState([])
  const navigate = useNavigate()

  const addImg = (data) => {
    let value = []
    data.forEach((item) => {
      let image = (spaceCraft.find((data) => data.name === item.mission_name)).image
      value = [...value, { ...item, image: image ?? defaultImage }]
    })
    return value
  }

  useEffect(() => {
    const callBack = async () => {
      const {data} = await launchesServices.upcomingLaunches()
      console.log(data);
      setDetails(addImg(data))
    }
    callBack()
  }, [])

  const handleClick = (item) => {
    navigate(`launches/${item.flight_number}`)
  }
  return (

    <div style={{ backgroundColor: 'black', minHeight:'100vh' }}>
      {details.length < 1 && <LoadingSpinner />}
      {details.map((item, index) => <BasicInfoSlide key={index} info={item} onClick={() => handleClick(item)} />)}
    </div>
  )
}

export default Home