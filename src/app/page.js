"use client"

import Footer from '@/components/Footer';
import Header from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
  const disableShortcuts = (e) => {
    if (e.ctrlKey && ["u", "i", "j", "s"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
    if (e.keyCode === 123) { // F12
      e.preventDefault();
    }
  };
    const disableRightClick = (e) => e.preventDefault();
  document.addEventListener("contextmenu", disableRightClick)
  document.addEventListener("keydown", disableShortcuts);
  return () => { 
    document.removeEventListener("keydown", disableShortcuts), 
    document.removeEventListener("contextmenu", disableRightClick)
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
            <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
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

          <section>
          <div className='bg-green-100 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Our Team</h3>
            <Image src="/images/team.jpg" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
              Our team comprises industry experts with extensive experience in agricultural practices, oil extraction, quality control, and market dynamics. This collective expertise drives our mission to produce superior avocado oil while fostering an inclusive and empowering work environment.
            </p>
          </div>
        </section>
          <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Social Responsibility</h3>
            <Image src="/images/social_responsibility.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             We believe in giving back to the community. Our social responsibility initiatives include supporting local education, healthcare and infrastructure projects. We actively participate in community development programs, ensuring that our growth translates into broader societal benefits. 
            </p>
          </div>
        </section>

                  <section>
          <div className='bg-green-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Environmental Stewardship</h3>
            <Image src="/images/avoteam.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             Environmental sustainability is at the core of our operations. From sustainable farming practices to eco-friendly processing methods, we strive to minimize our environmental footprint and promote the conservation of natural resources. 
            </p>
          </div>
        </section>
                 <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Economic Employment</h3>
            <Image src="/images/employees.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             We aim to economically empower our farmers and employees through fair trade practices, competitive wages, and continuous capacity-building programs. By creating a stable and profitable market for avocados, we contribute to the economic upliftment of our community.
            </p>
          </div>
        </section>
                   <section>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Innovation and Excellence</h3>
            <Image src="/images/innovation.jpg" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
             Innovation drives our business. We continuously invest in research and development to improve our extraction processes, enhance product quality, and explore applications for avocado oil. Our quest for excellence ensures that we remain at the forefront of industry advancements
            </p>
          </div>
        </section>
                           <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Market Leadership</h3>
            <Image src="/images/market.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
            We aim to expand our market presence globally, establishing Avopro EPZ Ltd as a household name in the avocado oil industry. Our strategic partnerships and customer-centric approach help us meet the evolving demands of the market.
            </p>
          </div>
        </section>

                             <section>
          <div className='bg-gray-200 p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Raw Material Sourcing</h3>
            <Image src="/images/avoteam3.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-bottom rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Over %80 of our raw materials is sourced from hundreds of contracted small-scale farmers, with the rest coming from large-scale farmers and prequalified independent suppliers. We provide technical advice to our contracted farmers to help them meet the quality and food standards required for our markets and to maximize their production. 
            </p>
          </div>
        </section>

                                     <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Sustainable Farming Practices</h3>
            <Image src="/images/fieldprunning.png" width={600} height={300} alt="Our Team" className="max-h-52 object-cover object-top rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           We promote sustainable farming practices among our farmers, ensuring that our avocado sourcing does not harm the environment. By offering training and resources, we help farmers adopt eco-friendly practices that enhance yield and preserve the ecosystem. 
            </p>
          </div>
        </section>

                                       <section>
          <div className='bg-white p-10 text-center items-center text-black font-serif  text-black border rounded-lg flex items-center flex-col'>
            <h3 className="text-3xl font-bold text-center mb-8">Farmers support Programs</h3>
            <Image src="/images/fieldtraining.png" width={800} height={600} alt="Our Team" className="max-h-64 lg:max-h-96 object-cover object-center rounded-xl shadow-lg border-4 border-white"/>
            <p className="text-center text-black max-w-2xl mx-auto font-serif  text-black p-5">
           Our support extends beyond technical advice. We provide farmers with financial assistance, access to high-quality seedlings, and market information. This holistic approach ensures that our farmers are well-equipped to produce the best avocados. 
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
            <form className="max-w-lg mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
