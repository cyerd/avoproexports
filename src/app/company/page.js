import Header from '@/components/header'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">100mm Trays</h3>
              <p>Neatly packed into lined trays with sizes ranging from count 14 to 30.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">156mm Bulk</h3>
              <p>
                Rumble fill boxes approximately 10kg, perfect for everyday use and food service.
              </p>
            </div>
          </div>
        </section>

        {/* Grades */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Grades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Class 1</h3>
              <p>Premium tasty class one avocados packed to high specifications.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Food Service</h3>
              <p>Perfect for restaurants, cafes, and hospitality use.</p>
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
        <section className="bg-green-100 p-6 rounded-lg">
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