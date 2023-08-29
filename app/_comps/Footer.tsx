import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 text-white bg-gray-800 ">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Web3 Club Africa. All rights reserved.</p>
                <p>
                    Designed and developed by <Link href="https://elianm.web.app" className="text-blue-500 hover:underline">Elian</Link>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
