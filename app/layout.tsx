'use client'
import React from 'react';
import { Ubuntu } from 'next/font/google';
import Header from './_comps/Header';
import Footer from './_comps/Footer';
import type { Metadata } from 'next'
import './globals.css'; // Import your global CSS file



import { SessionProvider } from 'next-auth/react';

const ubuntu = Ubuntu({
  weight: '300',
  preload: true,
  subsets: ['cyrillic-ext']
});

interface RootLayoutProps {
  children: React.ReactNode;
  session: any; // Modify this type based on your session structure
}



const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  session
}) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen scroll-smooth">
        <SessionProvider session={session}>
          <div className="fixed top-0 left-0 right-0 z-50 bg-white" ><Header /></div>  {/* Use Tailwind CSS classes for fixed header */}
          <div className="flex-grow pt-20 overflow-y-auto"> {/* Use overflow-y-auto to enable scrolling */}
            <div className={ubuntu.className}>{children}</div>
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
