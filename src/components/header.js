'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const products = [
  { 
    name: 'Extra Virgin Avocado  Oil', 
    description: 'Produced using the cold press method to ensure the highest quality. Rich in vitamins and antioxidants, ideal for culinary use and cosmetic applications.', 
    href: '#', 
    icon: '/images/EXTRA_VIRGIN1.png' 
  },
  { 
    name: 'Organic Avocado Oil ', 
    description: 'Certified organic, free from pesticides and synthetic fertilizers, retaining all natural goodness.', 
    href: '#', 
    icon: '/images/ORGANIC1.png' 
  },
  { 
    name: 'Avocado Crude Oil', 
    description: 'Minimally processed to maintain natural color and nutrients, ideal for industrial applications.', 
    href: '#', 
    icon: '/images/5ltroil1.png' 
  },
  { 
    name: 'Macadamia Kernels', 
    description: 'Rich, buttery flavor, perfect for snacking or as an ingredient in gourmet recipes.', 
    href: '#', 
    icon: '/images/maca.png' 
  },
  { 
    name: 'Mango Pulp', 
    description: 'Made from the finest mangoes, processed to retain natural flavor and nutrients. Ideal for juices and desserts.', 
    href: '#', 
    icon: '/images/mango-products.png' 
  }
];
const callsToAction = [
  { name: 'WhatsApp', href: 'https://wa.me/+254746446446', icon: ChatBubbleBottomCenterIcon },
  { name: 'Contact sales', href: 'mailto:info@avoprokenya.com', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <a href="/" className="-m-1.5 p-1.5">
        <div className="flex items-center lg:flex-1">
          
          <img
              alt=""
              src="./avopro expo/avofruit.png"
              className="h-12 w-auto"
            />          
            
          
          <span className="text-black text-xl font-bold font-serif px-2 ">AVOPRO EPZ LTD</span>
          
        </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div key={item.name} className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Image
                            src={item.icon} // Ensure this path is correct
                            alt="Fresh Avocado"
                            width={60}
                            height={60}
                            objectFit="contain" // This ensures the image covers the div properly
                          />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="features" className="text-sm/6 font-semibold text-gray-900">
            Features
          </a>
          <a href="marketplace" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="company" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">AVOPRO EPZ LTD</span>
              <img
                alt=""
                src="./avopro expo/avofruit.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 bg-teal-100">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="marketplace"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
         
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
