import React from 'react'
import event1 from "/public/event1.webp"
import Image from 'next/image';
import pro8 from "/public/pro8.webp"
import event2 from "/public/event2.webp"
import { Button } from '@/components/ui/button';
export default function Promotionsection() {
  return (
    <>
    <div className='text-center sm:mx-24 mt-40 '>
       <span className=' text-[#0062f5] font-bold text-xs'>PROMOTIONS</span>
       <h2 className='text-[#212121] font-bold text-4xl mx-8 sm:text-4xl  mt-3'>Our Promotions Events</h2>
    </div>
    <div className=' grid  sm:flex sm:h-[100%]  sm:mx-32 sm:gap-9'>
           <div className='sm:w-[50%] sm:h-[100%]  mt-14'>
               <div className='sm:flex justify-between items-center bg-[#d6d6d8] mx-8 sm:w-[100%] h-auto sm:h-[170px]'>
                 <div>
                    <h2 className='text-[#212121] font-bold text-4xl pt-8 px-9'>GET UP TO 60%</h2>
                    <span className='text-[#212121] text-xl   px-9'>For the summer season</span>
                 </div>
                 <Image className="w-[200px] h-[170px] sm:justify-center items-center mx-14" src={event1} alt="event1"/>
               </div> 
               <div className=' bg-[#212121] mt-4 w-auto sm:w-[100%] sm:h-[170px]  mx-8   '>
                 <div className='text-white  flex flex-col  items-center justify-center py-6  '>
                    <h1 className=' font-semibold font-sans text-3xl fon sm:text-5xl pb-4 px-9'>GET 30% Off</h1>
                    <span className=' text-base mb-1  px-9'>USE PROMO CODE</span>
                    <Button className='text-xl font-mono  sm:text-2xl font-semibold bg-[#474747] sm:px-16'>DINEWEEKEND SALE</Button>
                 </div>
               </div>
           </div>
           <div className='bg-[#ffece3] sm:w-[270px] h-[357px] mt-16 mx-8 sm:flex'>
             <div className=' ml-8 sm:text-center'>
               <h2 className='mt-4  text-lg text-[#212121]'>Flex Sweatshirt</h2>
               <div className='space-x-4'>
               <span className='mt-2 line-through  '>$225.00</span>
               <span className='text-lg font-bold'>$225.00</span>
               </div>
                  <Image className='sm:w-auto h-[285px]' src={event2} alt="event2" /></div>


           </div>
           <div className='bg-[#d6d6d8] sm:w-[270px] h-[355px] mx-8 mt-16 sm:flex'>
             <div className=' ml-8 sm:text-center'>
               <h2 className='mt-4  text-lg text-[#212121]'>Flex Push Button Bomber</h2>
               <div className='space-x-4'>
               <span className='mt-2  line-through  '>$225.00</span>
               <span className='text-lg font-bold text-[#212121]'>$225.00</span>
               </div>
                  <Image className='w-auto sm:w-[100%] h-[285px]' src={pro8} alt="event1" />
              </div>
            </div>



         </div>


    
 
   </>
  );
}

