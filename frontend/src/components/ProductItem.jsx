import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      {/* Fixed aspect ratio container */}
      <div className="w-full aspect-[3/4] overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem
