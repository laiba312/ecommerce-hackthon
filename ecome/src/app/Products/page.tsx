import ProductCard from "@/components/ui/ProductCard";
import ProductList from "@/views/ProductList";
import { Products } from "@/utils/mocks";
import React from 'react'

export default function AllProducts() {
    const dd=Products.slice(0,4)
    const productslide=dd.map((p) => (
        <ProductCard 
        key={p.id} 
        title={p.name} 
        subcategory={p.subcategory} 
        price={p.price} 
        image={p.Image} 
        />
      ))
  return (

    <>
    <div className="sm:mx-32 mt-4 ">All products</div>

    <div className='sm:flex product-grid '>{productslide}

        
    </div>
    </>
  )
}
