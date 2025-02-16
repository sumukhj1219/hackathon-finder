import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const items = [
    {
      name: "Hackathons",
      href: "/map"
    },
    {
      name: "Ideas",
      href: "/myIdeas"
    },
    {
      name: "Generate new Idea",
      href: "/dashboard"
    }
  ];

  return (
    <div className='p-4 w-full z-10 top-0 left-0 fixed h-22 bg-black shadow-md'>
      <nav className='flex items-center justify-between'>

        <Image
          className='rounded-full'
          src={'/hackathon-finder-logo.webp'} 
          width={50}
          height={50}
          alt='logo'
        />
        <div className='flex space-x-6'>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className='text-purple-500 hover:text-purple-300'>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
