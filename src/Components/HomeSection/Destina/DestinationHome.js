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

              <div className="bg-stone-900 h-64 flex p-8">
                <div className="text-white flex-1"><ul className="amenities1">
                  <li>Restaurant</li>
                  <li>Outdoor Pool</li>
                  <li>Activities for Kids</li>
                  <li>Kitchen</li><br></br>
                </ul></div>
                <div className="text-white flex-1"><ul className="amenities2">
                  <li>Restaurant</li>
                  <li>Outdoor Pool</li>
                  <li>Activities for Kids</li>
                  <li>Kitchen</li><br></br>
                </ul></div>
                <div className="text-white flex-1"><ul className="amenities3">
                  <li>Restaurant</li>
                  <li>Outdoor Pool</li>
                  <li>Activities for Kids</li>
                  <li>Kitchen</li><br></br>
                </ul></div>
              </div>

            </div>

          </div>


        </div>
      </section>
    </>
  )
}

export default DestinationHome
