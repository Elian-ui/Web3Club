import React from 'react';
import LogoSvg from './LogoSvg';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="p-4 text-white bg-gray-900">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <div className="flex items-center mb-2 space-x-4 md:mb-0">
                    <div className="w-8 h-8">
                        <LogoSvg height={32} />
                    </div>
                    <span className="text-xl font-semibold">Web3 Club Africa</span>
                </div>
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
                    <Link href="/about" className="text-blue-500 hover:text-blue-300">About Us</Link>
                    <Link href="/events" className="text-blue-500 hover:text-blue-300">Events</Link>
                    <Link href="blogs" className="text-blue-500 hover:text-blue-300">Blogs</Link>
                    <Link href="/contact" className="text-blue-500 hover:text-blue-300">Contact</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="#" className="text-blue-500 hover:text-blue-300">Facebook</Link>
                    <Link href="#" className="text-blue-500 hover:text-blue-300">Twitter</Link>
                    <Link href="#" className="text-blue-500 hover:text-blue-300">Instagram</Link>
                </div>
                <div>
                    <div className='text-sm text-gray-400'>Subsribe to our news letter</div>
                    <form className="flex space-x-4">
                        <input type="email" placeholder="Enter your email" className="p-2 text-white bg-gray-800 rounded" />
                        <button type="submit" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;
