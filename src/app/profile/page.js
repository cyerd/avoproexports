import React from "react";
import Image from "next/image";

export default function CompanyProfile() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Avopro EPZ Ltd</h1>
        <p className="text-lg text-gray-700 mb-6">
          Avopro EPZ Ltd is a premier company in Kenya specializing in the extraction and
          marketing of high-quality avocado oil. With state-of-the-art machinery, a
          motivated team, and stringent international quality systems, we’re dedicated
          to sustainability and community empowerment.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To create long-term shared value by engaging in socially, environmentally,
            and economically responsible practices while producing premium avocado oil
            that meets the highest standards of quality and safety.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Responsibility</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Supporting local education, healthcare, and infrastructure projects.</li>
            <li>Promoting sustainable farming practices and environmental conservation.</li>
            <li>Empowering farmers and employees through fair trade and capacity-building.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Products</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-green-600">Avocado Products</h3>
              <Image
                src="/images/avocado-products.jpg"
                alt="Avocado Products"
                width={600}
                height={400}
                className="rounded-lg my-4"
              />
              <ul className="list-disc list-inside text-gray-700">
                <li>Extra Virgin Oil: Rich in vitamins, perfect for culinary and cosmetic use.</li>
                <li>Organic Oil: Certified organic, pesticide-free, and nutrient-rich.</li>
                <li>Crude Oil: Minimally processed, ideal for industrial applications.</li>
                <li>Spray Oil: Convenient for cooking and baking.</li>
                <li>Fresh Avocados: Handpicked for maximum freshness and flavor.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-green-600">Macadamia Products</h3>
              <Image
                src="/images/macadamia-products.jpg"
                alt="Macadamia Products"
                width={600}
                height={400}
                className="rounded-lg my-4"
              />
              <ul className="list-disc list-inside text-gray-700">
                <li>Kernels: Rich, buttery flavor, perfect for snacking or gourmet recipes.</li>
                <li>Organic Oil: Premium, ideal for culinary and cosmetic uses.</li>
                <li>Refined Oil: Pure, versatile for cooking and cosmetics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-green-600">Mango Products</h3>
              <Image
                src="/images/mango-products.jpg"
                alt="Mango Products"
                width={600}
                height={400}
                className="rounded-lg my-4"
              />
              <ul className="list-disc list-inside text-gray-700">
                <li>Fresh Mangoes: Juicy and perfect for direct consumption.</li>
                <li>Mango Pulp: Retains natural flavor, great for juices and desserts.</li>
                <li>Dried Mango Slices: Healthy and tasty snack option.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sustainability Initiatives</h2>
          <Image
            src="/images/sustainability.jpg"
            alt="Sustainability Initiatives"
            width={600}
            height={400}
            className="rounded-lg my-4"
          />
          <p className="text-gray-700">
            Our sustainability practices include organic agriculture, waste management
            through biogas generation, and water conservation efforts. We are committed
            to reducing our environmental footprint and promoting eco-friendly practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <ul className="text-gray-700">
            <li>
              <span className="font-medium">CEO:</span> Mohamud Abdullahi Keyse -
              <a
                href="mailto:mkeyse@avoprokenya.com"
                className="text-green-600 hover:underline"
              >
                mkeyse@avoprokenya.com
              </a>
            </li>
            <li>
              <span className="font-medium">Director of Operations:</span> Ahmed
              Abdullahi Mohamed -
              <a
                href="mailto:ahmedmohamed@avoprokenya.com"
                className="text-green-600 hover:underline"
              >
                ahmedmohamed@avoprokenya.com
              </a>
            </li>
            <li>
              <span className="font-medium">Director of Business Development:</span>
              Muhiyadin Qassim -
              <a
                href="mailto:mqassim@avoprokenya.com"
                className="text-green-600 hover:underline"
              >
                mqassim@avoprokenya.com
              </a>
            </li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-8">
          © 2025 Avopro EPZ Ltd. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
