import Background from "@/components/Background";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    
  <div className="min-h-full">
    <Header/>
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-green-500 uppercase  mb-2">PURE PREMIUM ORGANIC AVOCADO OIL</h1>
    <h3 className="text-2xl font-bold text-green-300 uppercase italic mb-4">Crafted for Global Excellence</h3>
    <span className="text-gray-700 leading-relaxed mb-8 w-full xl:w-[50%] text-xl italic font-semibold ">
      Avopro Kenya Ltd. has established a strongmarket presence both locally and internationally. The company ensures that its avocado 
      oil reaches wide range of consumers through:<br />
      <p className="font-bold text-green-700">Retail Outlets:</p> Available in supermarkets and specialty health food stores across Kenya 
      and other countries.<br />
      <p className="font-bold text-green-700">Online Sales:</p> Customers can purchase the oil directly from Avopro Kenya Ltd.’s 
      website or other e-commerce platforms.<br />
      <p className="font-bold text-green-700">Bulk Supply:</p> 
      The company also caters to restaurants, hotels, 
      and food manufacturers needing high-quality avocado oil in larger quantities.
    </span>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg shadow-lg p-6 bg-white">
          <h3 className="text-xl font-semibold text-green-500 mb-4">AVOCADO NUTRITION</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Improve lipid profile and contribute
              to cardiovasular health</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Increase the diversity and
              abundance of gut microbiota</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Assist in weight
              management</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Maintain cognitive
              function in aging</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Improve skin
              appearance</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Rich in folate, which is needed during
              pregnancy for tissue development.</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Nutrient dense with a soft texture
              making them a perfect rst food for
              babies and the frail elderly.</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>A useful source of monounsaturated fats
              in lower carb, higher fat, low-GI dies to
              help with glycemic management.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-4">AVOPRO OIL</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Premium Cold-Pressed Avocado Oil</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Rich in Healthy Fats, Vitamins &amp; Antioxidants</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sourced from the Finest Kenyan Avocados – Nature’s Best</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Versatile for Cooking, Skincare, and Health</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sustainably Produced for a Better Future</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Taste the Purity, Experience the Power of Nature in Every Drop!</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto top-0" style={{backgroundImage: 'url("./avopro expo/leavesbg.png")', backgroundRepeat: 'no-repeat', backgroundSize: '800px 1600px'}}>
        <img src="./avopro expo/avofruit.png" alt="Car 1" className="w-200 object-contain  h-150 rounded-lg" />
        <img src="./avopro expo/ovacadooil.png" alt="Car 2" className="w-200 object-contain h-150 rounded-lg" />
        <img src="./avopro expo/avocado_hummus1.png" alt="Car 3" className="w-200 object-contain h-150 rounded-lg" />
        <img src="./avopro expo/allpackaging.png" alt="Car 4" className="w-200 object-contain h-150 rounded-lg" />
      </div>
    </div>
  </div>
</div>

  );
}
