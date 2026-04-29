import React from 'react'
import ServicesHero from '../Containers/Service/ServicesHero'
import ServicesGrid from '../Containers/Service/ServicesGrid'
import ServicesCTA from '../Containers/Service/ServicesCTA'
import ServicesTech from '../Containers/Service/ServicesTech'

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesGrid/>
      <ServicesTech/>
      <ServicesCTA/>
    </div>
  )
}

export default ServicesPage
