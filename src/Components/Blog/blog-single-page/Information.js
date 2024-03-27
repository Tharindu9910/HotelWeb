import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../Common/Empty/EmptyFile"
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"
import InfoData from "../blog-single-page/information-data"
import "../BlogHome.css"


const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)




  useEffect(() => {
    let item = InfoData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <div className="back">
            <Link to='/accommodation' className='primary-btn'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
            </div>
            

            {/* --------- main-content--------- */}

            <article className='content flex_space'>
             
               <img className="main-content" src={item.cover} alt='' />

                {/*<div className='category flex_space'>
                  <span>{item.date}</span>
                  <label>{item.catgeory}</label>
      </div>*/}
              
    
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              {<div className='side-content'>
                <div className='category-list'>
                 <h1>{item.title}</h1>

                 
                  <ul>
                  <h4>Description</h4>
                  <li>{item.Description}</li>
                  <h4>Features</h4>
                  <li>{item.Features}</li>
                    <h4>Amenities</h4>
                  <li>{item.Amenities}
                     </li>
                  </ul>
                </div>
              </div>
                  }

              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default BlogSingle
