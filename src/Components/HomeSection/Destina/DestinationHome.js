import React from "react"
import "../popular/MostPopular.css"
import { Link } from "react-router-dom"
//import Dcards from "../../Destinations/Dcards"
import AllItem from "../../Destinations/AllItem"

const DestinationHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>FEATURED AMENITIES ON-SITE</h1>
            <div className='line'></div>
            <br></br>
            <div className='content'>
            <ul className="amenities">
              <li>eff4;Restaurant</li>
              <li>Outdoor Pool</li>
              <li>Activities for Kids</li>
              <li>Kitchen</li><br></br>
            </ul>
            
          </div>
          
          </div>

          
        </div>
      </section>
    </>
  )
}

export default DestinationHome
