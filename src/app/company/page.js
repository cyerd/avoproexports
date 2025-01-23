import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen px-4 sm:px-8">
      <Header/>
        {/* Main Content */}
      <main className="container mx-auto my-12">
        {/* Pack Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pack Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-['160px'] h-['160px']">
            <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
               <Image
                    src="/images/ovacadoinbox.png" // Ensure this path is correct
                    alt="Fresh Avocado"
                    width={160}
                    height={160}
                    objectFit="contain" // This ensures the image covers the div properly
                  />
              <span className='flex flex-col justify-center items-center'>
              <h3 className="text-xl font-bold mb-2">100mm Trays</h3>
              <p>Neatly packed into lined trays with sizes ranging from count 14 to 30.</p>
              </span>
            </div>
       <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
               <Image
                    src="/images/ovacadoinbox.png" // Ensure this path is correct
                    alt="Fresh Avocado"
                    width={160}
                    height={160}
                    objectFit="contain" // This ensures the image covers the div properly
                  />
              <span className='flex flex-col justify-center items-start'>
              <h3 className="text-xl font-bold mb-2">156mm Bulk</h3>
              <p>Rumble ll boxes approximately 10kg</p>
              </span>
            </div>
          </div>
        </section>

        {/* Grades */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Grades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Class 1</h3>
              <span className='flex justify-between items-center'>
                   <Image
                        src="/images/avofruit.png" // Ensure this path is correct
                        alt="Fresh Avocado"
                        width={60}
                        height={60}
                        objectFit="contain" // This ensures the image covers the div properly
                      />
              <p>Premium tasty class one avocados packed to high specifications.</p>
              </span>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Food Service</h3>
              <span className='flex justify-between items-center'>
                 <Image
                        src="/images/avofruit.png" // Ensure this path is correct
                        alt="Fresh Avocado"
                        width={60}
                        height={60}
                        objectFit="contain" // This ensures the image covers the div properly
                      />
              <p>Perfect for restaurants, cafes, and hospitality use.</p>
              </span>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Transportation</h2>
          <ul className="list-disc pl-6">
            <li>Air transport: Compact and efficient packaging.</li>
            <li>Sea transport: Mix of trays and bulk options available.</li>
          </ul>
        </section>

        {/* Producing Regions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Avocado Producing Regions</h2>
          <p>
            East Africa is a notable region for avocado cultivation. Main regions include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div>
              <h3 className="font-bold">Kenya</h3>
              <ul className="list-disc pl-4">
                <li>Murang'a County</li>
                <li>Kisii County</li>
                <li>Nyeri County</li>
                <li>Kiambu County</li>
                <li>Embu County</li>
                <li>Meru County</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Uganda</h3>
              <ul className="list-disc pl-4">
                <li>Masaka and Mpigi (Central Region)</li>
                <li>Kabarole and Kasese (Western Region)</li>
                <li>Mbale (Eastern Region)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Rwanda</h3>
              <ul className="list-disc pl-4">
                <li>Northern Province</li>
                <li>Western Province</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Tanzania</h3>
              <ul className="list-disc pl-4">
                <li>Iringa Region</li>
                <li>Kilimanjaro Region</li>
                <li>Mbeya Region</li>
                <li>Arusha Region</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">The Hyatt, 2nd Floor, Suite No. 206, 207</p>
          <p className="mb-2">Lower Kabete Road, Westlands</p>
          <p className="mb-2">P.O. Box 8464-00610, Nairobi, Kenya</p>
          <p className="mb-2">Phone: +254 746 446 446</p>
          <p className="mb-2">Email: sales@avoprokenya.com | info@avoprokenya.com</p>
          <p className="mb-2">Website: <a href="http://www.avoprokenya.com" className="text-green-700 underline">www.avoprokenya.com</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Avopro Kenya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default page