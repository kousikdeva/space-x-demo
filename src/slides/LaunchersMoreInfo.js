import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MoreInfoSlide from '../components/MoreInfoSlide'
import launchesServices  from '../service/launchesService'
import { dateFormat } from '../utils/helper'
import { randomImages } from '../mock/rocketsImgDetails'
import { randomObject } from '../utils/helper'


const MoreInfo = () => {
    const params = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const callBack = async () => {
            const { data } = await launchesServices.getLauncher(params.id)
            setDetails({ ...data,image:randomObject(randomImages).image ,launch_date: dateFormat(data.launch_date_utc) })
        }
        callBack()
    }, [])

    return (
        <div style={{ backgroundColor: 'black'}}>
            <MoreInfoSlide description={details.details} details={details} />
        </div>
    )
}

export default MoreInfo