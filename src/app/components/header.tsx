import React from 'react';
import Link from 'next/link';





export default function Header() {
  return (
    <div>
      <nav className="w-full flex flex-wrap justify-between items-center py-2 px-4 md:bg-gray-100 lg:bg-gray-100 text-sm">
        {/* Logo Section */}
        <div className="flex flex-wrap items-center">
         <Link href='/'>Qurat</Link>
  
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link href="/" className="text-lg text-black">
              Home
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/blogsss" className="text-lg text-black">
              My Blogs
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/" className="text-lg text-black">
              Contact Us
            </Link>
          </li>
      
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-100 p-4">
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-lg text-black">
              Home
            </a>
          </li>
          <li>
            <a href="/blogsss" className="text-lg text-black">
              My Blogs
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-black">
              Contact Us
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
