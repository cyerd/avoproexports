import { XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function Banner() {
  return (
    <div className="overflow-hidden w-full lg:h-64 flex items-center">
 <Image src="/images/bgbanner.png" alt="Avocado" width={5183} height={200}
      objectFit="contain" />
    </div>
  )
}
