"use client"

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  const disableRightClick = (e) => e.preventDefault();
    const disableShortcuts = (e) => {
    if (e.ctrlKey && ["u", "i", "j", "s"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
    if (e.keyCode === 123) { // F12
      e.preventDefault();
    }
  };
  document.addEventListener("keydown", disableShortcuts);
  document.addEventListener("contextmenu", disableRightClick);
  return () => {
    document.removeEventListener("contextmenu", disableRightClick),
    document.removeEventListener("keydown", disableShortcuts)
  }
}, []);
  return (
    
  <div className="min-h-full">
    <Header/>
  <div >
    <section  className="flex flex-col justify-center items-center"
      style={{
          height: "100vh",
          backgroundImage: "url('/images/bgbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
        >
          <div className="bg-green-100 p-3 rounded-xl text-wrap opacity-75">
    <h1 className="text-4xl font-bold text-green-800 uppercase  m-2">PURE PREMIUM ORGANIC AVOCADO OIL</h1>
    <h3 className="text-2xl font-bold text-black text-opacity-100 m-2 lg:mx-[25%] rounded-xl bg-white uppercase italic mb-4">Crafted for Global Excellence</h3>
    <span className="text-gray-800 leading-relaxed mb-8 px-10 w-full xl:w-[50%] text-xl italic font-semibold ">
      Avopro Kenya Ltd. has established a strongmarket presence both locally and internationally.<br/> The company ensures that its avocado 
      oil reaches wide range of consumers through:<br />
      <p className="font-bold mt-8 text-green-800">Retail Outlets:</p> Available in supermarkets and specialty health food stores across Kenya 
      and other countries.<br />
      <p className="font-bold text-green-800">Online Sales:</p> Customers can purchase the oil directly from Avopro Kenya Ltd.’s 
      website or other e-commerce platforms.<br />
      <p className="font-bold text-green-800">Bulk Supply:</p> 
      The company also caters to restaurants, hotels, 
      and food manufacturers needing high-quality avocado oil in larger quantities.
    </span>
    </div>
    </section>
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
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Premium Cold-Pressed Avocado Oil</li>
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Rich in Healthy Fats, Vitamins &amp; Antioxidants</li>
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Sourced from the Finest Kenyan Avocados – Nature’s Best</li>
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Versatile for Cooking, Skincare, and Health</li>
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Sustainably Produced for a Better Future</li>
            <li className="flex items-center"><span className="text-green-500 ">✓</span>Taste the Purity, Experience the Power of Nature in Every Drop!</li>
          </ul>
        </div>
      </div>
      <div className="inline-grid contain-content contain-inline-size justify-center  grid-cols-1 md:grid-cols-2 items-center" style={{backgroundImage: 'url("./avopro expo/organicoilpuring.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Image src="/images/avofruit.png" alt="ovacado" width={260} height={150} objectFit="cover" />
         <Image src="/images/allpackaging.png" alt="ovacado" width={260} height={150} objectFit="cover" />
         <Image src="/images/ovacadooil.png" alt="ovacado" width={350} height={150} objectFit="cover" className="rounded-lg" />
         <Image src="/images/avocado_hummus1.png" alt="ovacado" width={350} height={150} objectFit="cover" className="rounded-lg" />
     
         
         
      </div>
    </div>
  </div>
  <Footer/>
</div>

  );
}
