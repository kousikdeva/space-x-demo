import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MoreInfoSlide from '../components/MoreInfoSlide'
import { randomImages } from '../mock/rocketsImgDetails'
import rocketsServices from '../service/rocketsServices'
import { randomObject } from '../utils/helper'

const RocketsMoreInfo = () => {
    const params = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const callBack = async () => {
            const { data } = await rocketsServices.getRockets(params.id)
            setDetails({...data, image:randomObject(randomImages).image})
        }
        callBack()
    }, [])
  return (
    <div style={{ backgroundColor: 'black', display: 'flex'}}>
        <MoreInfoSlide description={details.description} details={details}/>
    </div>
  )
}

export default RocketsMoreInfo