import React from 'react'
import AboutHero from '../Containers/About/AboutHero'
import AboutStory from '../Containers/About/AboutStory'
import Team from '../Containers/About/Team'
import AboutCTA from '../Containers/About/AboutCTA'
import WhyChooseUs from '../Containers/Home/WhyChooseUs'
import OurProcess from '../Containers/About/OurProcess'

const AboutUs = () => {
  return (
    <div>
      <AboutHero/>
      <AboutStory/>
      {/* <Team/> */}
      <OurProcess/>
      <AboutCTA/>
    </div>
  )
}

export default AboutUs
