"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Products } from "@/utils/mocks";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductList() {
  // Use slice instead of splice to avoid mutating the original Products array


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const productslide=Products.map((p) => (
    <ProductCard key={p.id} title={p.name} price={p.price} image={p.Image} />
  ))

  return (
    <>
    <div className='text-center mx-24 mt-40 '>
       <span className=' text-[#0062f5] font-bold text-xs'>PRODUCTS</span>
       <h2 className='text-[#212121] font-bold text-4xl mt-3'>Check What We Have</h2>
    </div>
    <Carousel className='mx-8 lg:mx-24 mt-16 overflow-hidden  text-center lg:text-left ' responsive={responsive}>
        {productslide}
    </Carousel>
    </>
  );
}
