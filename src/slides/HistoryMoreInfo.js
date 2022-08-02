import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MoreInfoSlide from '../components/MoreInfoSlide'
import { randomImages } from '../mock/rocketsImgDetails'
import historyServices from '../service/historyServices'
import { randomObject, dateFormat } from '../utils/helper'

const HistoryMoreInfo = () => {
  const params = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const callBack = async () => {
      const { data } = await historyServices.getHistory(params.id)
      setDetails({ ...data, image: randomObject(randomImages).image, launch_date: dateFormat(data.event_date_utc) })
    }
    callBack()
  }, [])

  return (
    <div style={{ backgroundColor: 'black'}}>
      <MoreInfoSlide description={details.details} details={details} />
    </div>
  )
}

export default HistoryMoreInfo