import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2 className="aboutUs">ABOUT US</h2>
            <p>Located in the picturesque coastal town of Negombo, Sri Lanka, Lagoon Deck Hotel invites you to experience unparalleled hospitality amidst breathtaking natural beauty. 
              Nestled along the pristine shores of the Indian Ocean, our hotel offers a serene escape from the hustle and bustle of everyday life. Boasting luxurious accommodations, exquisite dining options, and world-class amenities, we ensure a truly memorable stay for every guest. 
              </p>
            <br />
            <p>Whether you're seeking relaxation by our infinity pool overlooking the azure waters, indulging in sumptuous local cuisine at our signature restaurant, or exploring the vibrant culture and rich history of Negombo, Lagoon Deck Hotel promises an unforgettable retreat tailored to your desires. 
              Come, immerse yourself in the tranquil ambiance and warm hospitality of our coastal haven, where every moment is crafted to perfection.</p>
            
          </div>

          

          <div className='box'>
            <h2 className="navigation">NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/accommodation'>Accommodation</Link>
              </li>
              <li>
                <Link to='/dinning'>Dinning</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>{/*
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
               */}
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>


          <div className='box'>
            <h2 className="social">SOCIAL</h2>
            <div style={{padding:5}} className='icon flex_space'>
                <li><i   className='fab fa-facebook-f' ></i></li>
                <li><i   className='fab fa-twitter'></i></li>
                <li><i   className='fab fa-linkedin'></i></li>
                <li><i   className='fab fa-instagram'></i></li>
                <li><i   className='fab fa-youtube'></i></li>
                
              
              
            </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
