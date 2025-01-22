import Image from 'next/image'
import React from 'react'

function PackOption() {
  return (
    <div className='bg-green-100  flex justify-center items-center flex-col'>
        <div className='max-w-lg bg-black flex items-center justify-center flex-col'>
            <h2 className='text-white font-bold text-2xl'>Pack Option</h2>
            <div className='flex flex-col justify-center items-center '>
                <p className='text-white text-center border-x-2 border-t-2 rounded border-gray-50 p-1 font-medium my-2'>100 mm tray </p>
                <div className='flex justify-around flex-col lg:flex-row  items-center border border-spacing-2 bg-white rounded'>
                        <Image
                            src="/images/avofruit.png" // Ensure this path is correct
                            alt="Fresh Avocado"
                            width={60}
                            height={60}
                            objectFit="contain" // This ensures the image covers the div properly
                          />
                          <p className='text-white bg-black font-semibold text-lg  m-2 text-center border rounded rounded-b-2xl border-gray-50 p-5'>Neatly Packed into lined trays with sizes ranging from count 14 to 30</p>
                </div>
            </div>
            
                 <div className='flex flex-col justify-center items-center my-2  relative'>
                <p className='text-white text-center border-x-2 border-t-2 rounded border-gray-50 p-1 font-medium my-2'>156 mm Bulk </p>
<div className="flex justify-around items-center border border-spacing-2 bg-white rounded p-4 mb-20">
    <div className="flex justify-around flex-col lg:flex-row items-center border border-spacing-2 bg-white rounded ">
      <Image
        src="/images/avofruit.png" // Ensure this path is correct
        alt="Fresh Avocado"
        width={60}
        height={60}
        objectFit="contain" // This ensures the image covers the div properly
      />
      <p className="text-white w-full bg-black font-semibold text-lg m-2 text-center border rounded-b-2xl border-gray-50 p-5">
        Rumble ll boxes approximately 10kg 
      </p>
    </div>


  </div>
        <div className='absolute '>
      <Image
            src="/images/ovacadoinbox.png" // Ensure this path is correct
            alt="Fresh Avocado"
            width={200}
            height={160}
            objectFit="contain" // This ensures the image covers the div properly
            className="relative rounded"
                  style={{
        top: '140px', // Move 20px down from its normal position
      }}
          />
          </div>
</div>
             <div className='flex justify-center items-center bg-black flex-col  mt-20'>
        <h2 className='text-white font-bold text-right'>GRADES</h2>
        <div className='flex justify-around flex-col items-center border border-spacing-2 bg-white rounded'>
          <span className='flex flex-col text-white right-0 relative bg-black   m-2 text-center border rounded rounded-b-2xl border-gray-50 p-5 '>
            <h2 className='font-semibold text-lg'>
              Premium
            </h2>
            <p className=''>
              A green box of the best-in-class avocados.
            </p>
          </span>
            
        </div>
        
        </div>    
            
        </div>

        </div>
  )
}

export default PackOption