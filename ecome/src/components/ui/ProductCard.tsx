import Image ,{ StaticImageData } from 'next/image'
import React from 'react';
type product={
    image: StaticImageData,
    title:string,
    price:number
    subcategory?:string
    
}
export default function ProductCard (props:product) {
    const { image, title, price ,subcategory} = props;

    return (
        <>
          <div className='transform transition-transform duration-700  hover:scale-110'>
            <Image className='w-[380px] h-[400px] ' src={image} alt={title} />
            <h2 className='mt-4 font-bold text-lg text-[#212121]'>{title}</h2>
            <p  className='mt-2 text-lg font-semibold text-[#888888]'>{subcategory}</p>
            <p  className='mt-2 font-bold text-lg text-[#212121]'>${price}</p>

         </div>
        </>
    );
}