import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link href="/" className='bg-blue-600 text-white  rounded-lg p-2'>
          
            Go Home
          
        </Link>
      </div>
    </div>
  );
}
