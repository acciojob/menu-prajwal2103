import React from 'react'

const Card = ({name,price,img,desc}) => {
  return (
    <div>
    <img src={img}   />
    <div>
    <span>{name}</span>  
    <span>{price}</span> 
    <div>
      <p>{desc}</p>
    </div>
    </div>

    </div>
  )
}

export default Card