"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import logo from "/public/logo.webp"
import Link from 'next/link'
import { Input } from '../ui/input'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='lg:hidden flex flex-col  justify-between items-center mt-8 px-8 '>
      <div className='flex justify-between items-center w-full lg:w-auto relative'>
        <Image src={logo} alt='logo' className='w-[150px]' />
        <div className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>
      </div>
      <div className={`flex ${menuOpen ? 'flex' : 'hidden'} flex-col  gap-x-11   items-center justify-center justify-items-center pt-[170px]`}>
        <div className=' md:hidden rounded-full bg-[#8f8a8a] h-10 w-10 pt-2 pl-2    ml-2 relative ' ><ShoppingCart className='absolute   ' />
        </div>
        <ul className='  mt-10  smd:flex    font-normal items-center  text-center    '>
          <li className='mb-1 text-lg'>
            <Link href="/">Female</Link>
           </li>
          <li className='mb-1 text-lg'>
            <Link href="/">Male</Link>
          </li>
          <li className='mb-1 text-lg'>
            <Link href="/">Kids</Link>
          </li>
          <li className='mb-1 text-lg'>
            <Link href="/">All Products</Link>
          </li>
        </ul>
      </div>
    </div> 
           {/*for lg */}

<div className='hidden lg:flex lg:flex-row lg:justify-between  lg:items-center mx-[124px] pt-[38px]'>
        
            <Image src={logo} alt='logo' className='w-[146px]' />
            <ul className='flex flex-col lg:flex-row  gap-9 font-normal items-center text-center'>
              <li className='text-lg'>
                <Link href="/">Female</Link>
              </li>
              <li className='text-lg'>
                <Link href="/">Male</Link>
              </li>
              <li className='text-lg'>
                <Link href="/">Kids</Link>
              </li>
              <li className='text-lg'>
                <Link href="/Products">All Products</Link>
              </li>
            </ul>
        <div className='relative'>
          
          <Input type="search" placeholder="What are you looking for?" className='pl-6 pr-10' />
          <Search className='absolute right-3 top-1/2 transform -translate-y-1/2' />
        </div>
        <div className='ml-6 h-10 w-10 rounded-full bg-[#f1f1f1] relative'>
          <ShoppingCart className='absolute mt-2 ml-[6px]' />
        </div>
      </div>
     
  </>
  )
}

export default Header
