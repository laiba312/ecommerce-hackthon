import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart} from 'lucide-react'
import Image from 'next/image'
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"
import header from "/public/header.webp"




export default function Herosection() {
  return (
    <section className='lg:mx-[100px] lg:pt-0 px-7 w-auto  lg:flex gap-x-[150px]  '>
      {/*left div*/}
      
      <div className='mt-[65px] lg:mt-[110px] lg:w-2/5 '>
          <Badge className='' variant="secondary">Sales 70%</Badge> 
          <h1 className=" text-[#212121] font-bold tracking-tight font-sans text-6xl pt-9">An Industrial Take on Streetwear</h1>
          <p className='mt-9 text-[#66667f] font-sans font-semibold text-1xl'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <div><Button className='mt-9 bg-[#212121] shadow-2xl border-2 border-[#545454] py-7 rounded-none px-8 font-semibold text-lg border-r-black border-b-black active:border-t-black active:border-l-black active:border-b-[#545454] active:border-r-[#545454]' variant={'secondary'}><ShoppingCart className='mr-3'/>Start Shoping</Button></div>
          <div className='grid grid-cols-2  h-1 w-72 mt-8  gap-4 md:flex md:gap-20 lg:mt-28 md:w-98 md:h-9'>
            <Image src={Featured1} alt="Featured1" />
            <Image src={Featured2} alt="Featured2" />
            <Image src={Featured3} alt="Featured3" />
            <Image src={Featured4} alt="Featured4" />

           
          </div>
          
      </div>
      
      {/*right div*/}
      <div className='hidden lg:inline-block lg:mt-9'>
        <div className='border h-[600px] w-[600px] mt-8 mr-11 pr-32  rounded-full bg-[#ffebe2] z-10 absolute '>        </div>

        <div className='absolute z-20'><Image className='h-[650px] w-[650px]   ' src={header} alt='header' /></div>
      </div>
    </section>
  )
}
