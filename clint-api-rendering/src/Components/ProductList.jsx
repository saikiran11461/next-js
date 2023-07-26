import React from 'react'

const ProductList = ({title,price}) => {
   
  return (
    <div>
      <p>{title}</p> 
      <span>{price}</span>
    </div>
  )
}

export default ProductList