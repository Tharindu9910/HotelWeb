import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h2>About Lagoon Deck</h2>
          <p>Located in the picturesque coastal town of Negombo, Sri Lanka, Lagoon Deck Hotel invites you to experience unparalleled hospitality amidst breathtaking natural beauty. 
             Nestled along the pristine shores of the Indian Ocean, our hotel offers a serene escape from the hustle and bustle of everyday life. Boasting luxurious accommodations, 
             exquisite dining options, and world-class amenities, we ensure a truly memorable stay for every guest. </p>
          <p>Whether you're seeking relaxation by our infinity pool overlooking the azure waters, indulging in sumptuous local cuisine at our signature restaurant, or exploring the vibrant 
             culture and rich history of Negombo, Lagoon Deck Hotel promises an unforgettable retreat tailored to your desires. Come, immerse yourself in the tranquil ambiance and warm 
             hospitality of our coastal haven, where every moment is crafted to perfection.</p>
          
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          
        </div>
      </div>
    </>
  )
}

export default AboutCard
