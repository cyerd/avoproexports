"use client"

import Executive from '@/components/Executive';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import { GlobeAltIcon } from '@heroicons/react/20/solid';
import { ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
  const disableShortcuts = (e) => {
    if (e.ctrlKey && ["u", "i", "j", "s", "c", "p"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
    if (e.keyCode === 123) { // F12
      e.preventDefault();
    }
  };
  
    const disableRightClick = (e) => e.preventDefault();
    const disableContextMenu = (e) => e.preventDefault();
  document.addEventListener("contextmenu", disableRightClick)
  document.addEventListener("keydown", disableShortcuts);
    document.addEventListener("dragstart", disableContextMenu);
    document.addEventListener("touchstart", disableContextMenu);
  return () => { 
    document.removeEventListener("keydown", disableShortcuts), 
    document.removeEventListener("contextmenu", disableRightClick)
    document.removeEventListener("dragstart", disableContextMenu);
    document.removeEventListener("touchstart", disableContextMenu);
  };
}, []);
  return (
    <div className="bg-gray-100 min-h-screen">
     

      <Header/>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <Image
          width={1920}
          height={500}
            src="/images/bgbanner.png" 
            alt="Wide image of avocado oil" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <h2 className="text-5xl font-extrabold mb-4 font-serif">Pure Premium Avocado Oil</h2>
            <p className="text-2xl font-serif">Crafted for Global Excellence</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center font-serif  text-black mb-8">Our Products</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white flex p-6 rounded-lg shadow-md text-center">
                <Image src="/images/EXTRA_VIRGIN1.png" width={200} height={200} alt='extra virgin oil'  style={{ 
    maxHeight: 300, 
    objectFit: 'contain', 
    objectPosition: '0% 80%' 
  }}  />
                <span>
                <h4 className="text-xl font-bold font-serif  text-black mb-2">AVOCADO EXTRA VIRGIN OIL</h4>
                <p className="text-black font-serif  text-black border rounded-lg p-5 border rounded-lg bg-gray-50 mt-5">Our Avocado Extra Virgin Oil is produced using the cold press method to ensure the highest quality. Rich in vitamins and antioxidants, this oil is ideal for culinary use and cosmetic applications.</p>
                </span>
              </div>
                         <div className="bg-white flex p-6 rounded-lg shadow-md text-center">
                <Image src="/images/ORGANIC1.png" width={200} height={200} alt='extra virgin oil'  style={{ 
    maxHeight: 300, 
    objectFit: 'contain', 
    objectPosition: '0% 80%' 
  }}  />
                <span>
                <h4 className="text-xl font-bold font-serif  text-black mb-2">AVOCADO ORGANIC OIL</h4>
                <p className="text-black font-serif  text-black border rounded-lg p-5 border rounded-lg bg-gray-50 mt-5">Certified organic, our Avocado Organic Oil is free from pesticides and synthetic fertilizers. It retains all the natural goodness of avocados, making it perfect for health-conscious consumers. </p>
                </span>
              </div>
            <div className="bg-white flex p-6 rounded-lg shadow-md text-center">
                <Image src="/images/5ltroil1.png" width={200} height={200} alt='extra virgin oil'  style={{ maxHeight: 300, objectFit: 'contain', objectPosition: '0% 80%' }}  />
                <span>
                <h4 className="text-xl font-bold font-serif  text-black mb-2">AVOCADO CRUDE OIL</h4>
                <p className="text-black font-serif  text-black border rounded-lg p-5 border rounded-lg bg-gray-50 mt-5">Our Avocado Crude Oil is minimally processed, maintaining its natural color and nutrients. It serves as a raw material for further refinement or direct use in various industries.</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className=' lg:p-20 lg:mx-52 rounded-xl border'>

        {/* About Section */}
        <section id="about" className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center font-serif  text-black  mb-8">About Us</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif">
              Avopro EPZ Ltd is a premier company registered and domiciled in Kenya, specializing in the extraction and marketing of high-quality avocado oil. We pride ourselves on utilizing state-of-the-art processing machinery, and employing a well-trained, highly motivated team. Our operations are governed by stringent international quality management systems. We have a robust smallholder farmers’ program that guarantees a consistent and sustainable supply of avocados, reinforcing our commitment to community and environmental stewardship. 
            </p>
          </div>
        </section>

          <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg'>
            <h3 className="text-3xl font-bold text-center mb-8">Our Journey</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif">
              Founded with a vision to transform the avocado industry in Kenya, Avopro EPZ Ltd has grown exponentially, earning a reputation for excellence in avocado oil production. Our journey has been marked by a dedication to quality, innovation, and sustainability, making us a trusted name in the global market.
            </p>
          </div>
        </section>

        <section>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg'>
            <h3 className="text-3xl font-bold text-center mb-8">Our Mission</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif">
              Our mission is to create long-term shared value by engaging in socially, environmentally, and economically responsible practices that benefit all our stakeholders. We are committed to producing premium avocado oil that meets the highest standards of quality and safety, while contributing to the well-being of our community and the sustainability of our environment.
            </p>
          </div>
        </section>

          <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg'>
            <h3 className="text-3xl font-bold text-center mb-8">Our Vision</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif">
              Our vision is to be a leading producer of safe, high-quality avocado oil products, handled by highly qualified and motivated staff. We aspire to set the benchmark for excellence in the industry, pioneering innovations that enhance product quality and operational efficiency.
            </p>
          </div>
        </section>

          <section id='team'>
          <div className='bg-green-100 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Our Team</h3>
            <Image src="/images/team.jpg" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
              Our team comprises industry experts with extensive experience in agricultural practices, oil extraction, quality control, and market dynamics. This collective expertise drives our mission to produce superior avocado oil while fostering an inclusive and empowering work environment.
            </p>
          </div>
        </section>
          <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Social Responsibility</h3>
            <Image src="/images/social_responsibility.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             We believe in giving back to the community. Our social responsibility initiatives include supporting local education, healthcare and infrastructure projects. We actively participate in community development programs, ensuring that our growth translates into broader societal benefits. 
            </p>
          </div>
        </section>

                  <section>
          <div className='bg-green-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Environmental Stewardship</h3>
            <Image src="/images/avoteam.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             Environmental sustainability is at the core of our operations. From sustainable farming practices to eco-friendly processing methods, we strive to minimize our environmental footprint and promote the conservation of natural resources. 
            </p>
          </div>
        </section>
                 <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Economic Employment</h3>
            <Image src="/images/employees.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             We aim to economically empower our farmers and employees through fair trade practices, competitive wages, and continuous capacity-building programs. By creating a stable and profitable market for avocados, we contribute to the economic upliftment of our community.
            </p>
          </div>
        </section>
                   <section id='innovations'>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Innovation and Excellence</h3>
            <Image src="/images/innovation.jpg" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             Innovation drives our business. We continuously invest in research and development to improve our extraction processes, enhance product quality, and explore applications for avocado oil. Our quest for excellence ensures that we remain at the forefront of industry advancements
            </p>
          </div>
        </section>
                           <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Market Leadership</h3>
            <Image src="/images/production.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
            We aim to expand our market presence globally, establishing Avopro EPZ Ltd as a household name in the avocado oil industry. Our strategic partnerships and customer-centric approach help us meet the evolving demands of the market.
            </p>
          </div>
        </section>

                             <section>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Raw Material Sourcing</h3>
            <Image src="/images/avoteam3.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-bottom rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Over %80 of our raw materials is sourced from hundreds of contracted small-scale farmers, with the rest coming from large-scale farmers and prequalified independent suppliers. We provide technical advice to our contracted farmers to help them meet the quality and food standards required for our markets and to maximize their production. 
            </p>
          </div>
        </section>

          <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Sustainable Farming Practices</h3>
            <Image src="/images/fieldprunning.png" width={600} height={300} alt="Avopro Epz LTD" className="max-h-52 object-cover object-top rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           We promote sustainable farming practices among our farmers, ensuring that our avocado sourcing does not harm the environment. By offering training and resources, we help farmers adopt eco-friendly practices that enhance yield and preserve the ecosystem. 
            </p>
          </div>
        </section>

           <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Farmers support Programs</h3>
            <Image src="/images/fieldtraining.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our support extends beyond technical advice. We provide farmers with financial assistance, access to high-quality seedlings, and market information. This holistic approach ensures that our farmers are well-equipped to produce the best avocados. 
            </p>
          </div>
        </section>

             <section>
          <div className='bg-green-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Community Development</h3>
            <Image src="/images/factory.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our collaboration with smallholder farmers fosters community development. By improving agricultural practices and increasing income levels, we contribute to the socio-economic growth of farming communities.
            </p>
          </div>
        </section>

        <span className='flex flex-col text-black font-serif p-5'>
          <h3 className='font-bold text-3xl p-5'>
            Quality Management System
          </h3>
          <p>
            We maintain a rigorous quality management system that complies with both local and international food safety standards. Excellence drives our business, and we ensure it is ingrained in our culture.
</p>
         
        </span>

                     <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Quality Assuarance</h3>
            <Image src="/images/avoteam2.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our quality assurance processes are designed to meet the highest industry standards. We conduct regular audits, implement stringent controls, and continuously monitor our operations to ensure product safety and quality.
            </p>
          </div>
        </section>
        
                     <section>
          <div className='bg-orange-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Continous Improvements</h3>
            <Image src="/images/storage-room.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           We believe in continuous improvement. Our quality management team is dedicated to identifying areas for enhancement and implementing best practice to maintain our reputation for excellence.
            </p>
          </div>
        </section>

          <section>
          <div className='bg-blue-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Certification and Compliance</h3>
            <Image src="/images/GACC.PNG" width={800} height={600} alt="Avopro Epz LTD" className="  object-cover object-top rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our quality management system is benchmarked to FSSC 22000 standards. We hold certifications that attest to our commitment to food safety and quality, reinforcing our credibility in the global market.
            </p>
          </div>
        </section>

           <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-2">Target Market</h3>
            
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our target markets include the cosmetic, pharmaceutical, and food industries.
            </p>
          </div>
        </section>

                   <section id='cosmetic'>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Cosmetic Industry</h3>
            <Image src="/images/facemask.jpg" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-fill object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Avocado oil is a sought-after ingredient in the cosmetic industry due to its moisturizing and anti-aging properties. Our high-quality oil is used in skincare and haircare products, enhancing their efficacy and appeal. 
            </p>
          </div>
        </section>

           <section id='pharma'>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Pharmaceutical Industry</h3>
            <Image src="/images/pharma.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           The pharmaceutical industry utilizes avocado oil for its health benefits. Our oil is used in formulations for supplements, topical treatments, and therapeutic products, contributing to health and wellness. 
            </p>
          </div>
        </section>

             <section id='food'>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Food Industry</h3>
            <Image src="/images/avocado_hummus.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           In the food industry, avocado oil is prized for its nutritional value and culinary versatility. Our oil is used in cooking, salad dressings, and health foods, offering a nutritious and flavorful alternative to conventional oils.
            </p>
          </div>
        </section>

          <section className="relative">
          <Image
          width={1920}
          height={500}
            src="/images/process.png" 
            alt="Wide image of avocado oil" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <h2 className="text-5xl font-extrabold mb-4 font-serif">PROUDUCTION</h2>
            <p className="text-2xl font-serif">Once the hand-picked mature avocados are delivered to the factory, they are naturally ripened. The avocado oil is mechanically extracted from the ripened fruits using the cold press method, ensuring the retention of all essential nutrients. Our extraction process is completely chemical and additive-free.</p>
          </div>
        </section>

                     <section id='food'>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Cold Press Method</h3>
            <Image src="/images/cold-press.jpg" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           The cold press method is a gentle extraction process that preserves the nutritional integrity and natural flavor of the avocado oil. This method ensures that our oil retains its health benefits, making it suitable for a variety of applications. 
            </p>
          </div>
        </section>

                          <section id='range'>
          <div className='bg-green-100 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Product Range</h3>
            <Image src="/images/allpackaging.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           We offer both organic and conventional avocado oil, available as extra-virgin or crude. Our products cater to diverse market needs, from health-conscious consumers to industrial applications.
            </p>
          </div>
        </section>

          <section id='food'>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">research and Development</h3>
            <Image src="/images/research.jpg" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
          Our R&D team is continuously exploring new ways to enhance our production processes. Through innovation and technology, we aim to improve efficiency, reduce waste, and develop new product formulations.
            </p>
          </div>
        </section>

           <section id='food'>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Packaging</h3>
            <div className='flex'>
            <span className='text-left items-center flex flex-col px-2'>
              <li>Flexitank (22,000kg)</li>
               <li>Intermediate Bulk Containers (IBC, 1000kg)</li>
                <li>Food-grade steel barrels (200kg)</li>
                <li>Retail bottles</li>
            </span>
            <Image src="/images/storagetypes.png" width={200} height={200} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
           </div>
           <h3 className="text-3xl font-bold text-center my-2 ">Custom Packaging</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-2">
          We understand that different markets have different packaging requirements. Therefore, we offer custom packaging solutions to meet specific customer demands, ensuring convenience and satisfaction. 
            </p>
            <h3 className="text-3xl font-bold text-center my-2 ">Sustainable Packaging</h3>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-2">
         Our commitment to sustainability extends to our packaging choices. We prioritize eco-friendly materials and practices, reducing our environmental impact and promoting a circular economy.  
            </p>
          </div>
        </section>

                  <section id='food'>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Sustainability</h3>
            <Image src="/images/avocado-products.png" width={800} height={600} alt="Avopro Epz LTD" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
          As a business, we appreciate that natural resources are limited, and we consider future generations in all our decisions. Adoption of organic agriculture for our contracted farmers is one such decision. 
            </p>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="py-16 flex justify-center flex-col items-center text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center font-serif  text-black  mb-8">Excecutive Board</h3>
            <div className='border p-2 bg-white'>
              <span className='border'>
                <p className='text-xl'>Mohamud  Keyse - CEO and President</p>
                <span className='flex justify-evenly flex-col items-center'>
                  <p className='text-lg flex  text-blue-500 font-serif '><EnvelopeIcon className='size-8 text-black '/><a className='ml-3 pl-2' href="mailto:mkeyse@avoprokenya.com">mkeyse@avoprokenya.com</a></p>
                  <p className='text-lg flex  text-blue-500 font-serif '><PhoneIcon className='size-8 text-black '/><a className='ml-3 px-9' href="tel:+254743443443">+254 7 43 443 443</a></p>
                </span>
              </span>
            </div>
            <div className='border p-2 bg-white'>
              <span className='border'>
                <p className='text-xl'>Ahmed  Mohamed - Director of Operations</p>
                <span className='flex justify-evenly flex-col items-center'>
                  <p className='text-lg flex  text-blue-500 font-serif '><EnvelopeIcon className='size-8 text-black '/><a className='ml-3 ' href="mailto:ahmedmohamed@avoprokenya.com">ahmedmohamed@avoprokenya.com </a></p>
                  <p className='text-lg flex  text-blue-500 font-serif '><PhoneIcon className='size-8 text-black '/><a className='ml-3 px-16' href="tel:+254740440450">+254 7 40 440 440</a></p>
                </span>
              </span>
            </div>
             <div className='border p-2 bg-white'>
              <span className='border'>
                <p className='text-xl'>Muhiyadin Qassim - Director of Business Development and Sales </p>
                <span className='flex justify-evenly flex-col items-center'>
                  <p className='text-lg flex  text-blue-500 font-serif '><EnvelopeIcon className='size-8 text-black '/><a className='ml-3 ' href="mailto:mqassim@avoprokenya.com">mqassim@avoprokenya.com  </a></p>
                  <p className='text-lg flex  text-blue-500 font-serif '><PhoneIcon className='size-8 text-black '/><a className='ml-3 px-10' href="tel:+254740441441">+254 7 40 441 441</a></p>
                </span>
              </span>
            </div>
  
          </div>
        </section> */}

        <Executive/>


           <section id='contact' className="bg-green-200 p-6 text-black rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">The Hyatt, 2nd Floor, Suite No. 206, 207</p>
          <p className="mb-2">Lower Kabete Road, Westlands</p>
          <p className="mb-2">P.O. Box 8464-00610, Nairobi, Kenya</p>
          <p className="mb-2 flex "><PhoneIcon className='size-6 '/> <a className='text-blue-500 px-2' href="tel:+254 746 446 446">+254 746 446 446</a></p>
          <p className="mb-2 flex "><EnvelopeIcon className='size-6 '/><a className='px-2 text-blue-500' href="mailto:sales@avoprokenya.com"> sales@avoprokenya.com </a> </p>
          <p className="mb-2 flex "> <EnvelopeIcon className='size-6 '/><a className='px-2 text-blue-500' href="mailto:info@avoprokenya.com"> info@avoprokenya.com </a></p>
          <p className="mb-2 flex "><ChatBubbleBottomCenterTextIcon className='size-6 '/> <a target="_blank" href="http://wa.me/+254746446446" className="text-blue-500 px-2 underline">Chat With Us on Whatsapp</a></p>
          <p className="mb-2 flex "><GlobeAltIcon className='size-6 '/> <a href="http://www.avoprokenya.com" className="text-blue-500 px-2 underline">www.avoprokenya.com</a></p>
        </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
