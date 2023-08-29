'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LogoSvg from './LogoSvg';
import { LogIn, LogOut, Menu, X } from 'react-feather';
import { useSession, signIn, signOut } from "next-auth/react"



const Header: React.FC = () => {
  const { data: session } = useSession()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <header className="bg-gray-800">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <Link href={'/'}>
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className='flex items-center'>
              <LogoSvg height={24} width={24} />
              <span className="ml-2 text-white">Web3 Club Africa</span>
            </div>
          </div>
        </Link>
        <nav className="items-center hidden p-3 space-x-4 md:flex">
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/about">About Us</NavLink>
          {session?.user?.name && <div className='flex justify-center w-6 h-6 bg-gray-900 rounded-full item-center'>
            <div>{session?.user?.name?.charAt(0).toUpperCase()}</div>
          </div>}
          {session?.user?.email ? <div className='flex items-center p-1 text-sm bg-gray-900 border rounded cursor-pointer' onClick={() => signOut()} >LOGOUT<LogOut className='w-4 h-4' /> </div> : <div className='flex items-center p-1 text-sm bg-gray-900 border rounded cursor-pointer' onClick={() => signIn()} >LOGIN < LogIn className='w-4 h-4' /></div>}
          {/* Add more navigation links as needed */}
        </nav>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="p-4 space-y-2 bg-gray-700 md:hidden">
          <NavLink href="/blogs" onClick={closeMobileMenu}>Blogs</NavLink>
          <NavLink href="/events" onClick={closeMobileMenu}>Events</NavLink>
          <NavLink href="/resources" onClick={closeMobileMenu}>Resources</NavLink>
          <NavLink href="/about" onClick={closeMobileMenu}>About Us</NavLink>
          {session?.user?.name && <div className='flex justify-center w-6 h-6 bg-gray-900 rounded-full item-center'>
            <div>{session?.user?.name?.charAt(0).toUpperCase()}</div>
          </div>}
          {session?.user?.email ? <div className='flex items-center p-1 text-sm bg-gray-900 border rounded cursor-pointer' onClick={() => signOut()} >LOGOUT<LogOut className='w-4 h-4' /> </div> : <div className='flex items-center p-1 text-sm bg-gray-900 border rounded cursor-pointer' onClick={() => signIn()} >LOGIN < LogIn className='w-4 h-4' /></div>}
          {/* Add more navigation links as needed */}
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link href={href}>
      <div
        className={`hover:text-blue-500 ${isActive ? 'text-blue-500 font-semibold' : 'text-white'}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  );
};

export default Header;
