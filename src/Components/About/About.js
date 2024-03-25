import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Services</span>
            </h1>
            <services>
            <ul>
              <li >Restaurant</li>
              <li >Water Sports</li>
              <li >Accommodation</li>
              <li >Dinner</li>
              <li >Social Event</li>
              <li >Kids and Water Sports</li>
              <li >Pool Area</li>

            </ul>
            </services>
            
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
