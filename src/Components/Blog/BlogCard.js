import React from "react"
import { Link} from "react-router-dom"

const BlogCard = ({ item: { id, cover, title, para} }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
        </div>

       <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
  

        <Link to={`/information/${id}`} className='blogItem-link'>
          READ MORE <i className='fa fa-long-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default BlogCard
