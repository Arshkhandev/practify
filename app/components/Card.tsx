import React, { useState } from 'react'
import { Product } from '../page'
type CardProps = {
  item: Product;
};

export default function Card({ item }: CardProps) {

  const[add,setAdd] = useState(true)
  return (
    <div className='flex flex-col  rounded-md gap-4 mt-4 items-center justify-around'>
      <img className="md:w-50 md:h-50 h-50 w-50"src={item.image} alt={item.title} />
      <h1 className='font-bold text-2xl'>{item.title.slice(0,25)}</h1>
      <p>{item.description.slice(0,120)}...</p>
      <p>${item.price}</p>
      <button className='font-bold bg-red-200 flex ' onClick={() => setAdd(!add)}>{add ? (<p>Add to Cart</p>) : (<p>Remove</p>)}</button>
    </div>
  );
}
