import Image from 'next/image'
import React from 'react'

function Logo() {
  return (

  <div className="">
    {/* SVG for Circular Text */}
  <div className="relative flex items-center justify-center w-64 h-64">
    {/* SVG for Circular Text */}
        <svg className="absolute w-64 h-64" viewBox="0 0 200 200">
      <defs>
        <path
          id="circlePath"
          d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
        />
      </defs>
      <text className="text-sm italic fill-gray-700">
        <textPath xlinkHref="#circlePath" startOffset="0%">
          Fresh Avocados · Premium Quality
        </textPath>
      </text>
    </svg>

    {/* Circular Image */}
    <div className="w-40 h-40 overflow-hidden rounded-full flex items-center justify-center">
      <Image
        src="/images/avofruit.png" // Ensure this path is correct
        alt="Fresh Avocado"
        width={160}
        height={160}
        objectFit="contain" // This ensures the image covers the div properly
      />
    </div>
  </div>



    </div>
  )
}

export default Logo