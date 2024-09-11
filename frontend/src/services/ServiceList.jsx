import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl:weatherImg,
    title :"Calculate Weather",
    desc:"Get the weather forecast for your city",
  },
  {
    imgUrl:guideImg,
    title :"Best Tour Guide",
    desc :"Find the best tour guide for your next trip",
  },
  {
    imgUrl:customizationImg,
    title : "Cutomization",
    desc : "Customize your trip with the best options",
  },
]

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item,index)=>(
      <Col lg='3' md="6" sm="12" className='mb-4' key={index}>
        <ServiceCard item={item}/>
      </Col>
    ))

    }
    </>
  )
}

export default ServiceList