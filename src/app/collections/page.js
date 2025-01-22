import Banner from '@/components/Banner'
import Header from '@/components/header'
import Logo from '@/components/Logo'
import PackOption from '@/components/PackOption'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <Banner/>
    <div className='grid row-span-8 grid-flow-row gap-2 mb-8 lg:mt-8 w-full mx-2 overflow-hidden lg:grid-flow-col'>
        <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
        <PackOption/>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center overflow-hidden'>
            <Logo/>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center overflow-hidden' style={{ backgroundImage: 'url(/images/bg.png)',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <div className="flex items-center justify-center overflow-hidden  w-160 h-40 top-36">
  
    </div>
        </div>

    </div>
    </div>
  )
}

export default page