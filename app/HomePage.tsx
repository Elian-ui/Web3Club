import React from 'react';
import Header from './_comps/Header';
// import FeaturedBlogs from './FeaturedBlogs'; // Import your existing components
// import UpcomingEvents from './UpcomingEvents'; // Import your existing components

// Import the SVG code
import WlisSVG from '../_assets/Wlis.svg';
import LogoSvg from './_comps/LogoSvg';
import FeaturedBlogs from './_comps/FeaturedBlogs';
import UpcomingEvents from './_comps/UpcomingEvents';
import Goals from './_comps/Goals';

const HomePage = () => {
  return (
    <div>
      <main className="container p-4 mx-auto">
        <section className="flex flex-col mb-8 md:flex-row">
          <div className="p-8 mb-4 rounded-lg shadow-lg md:w-1/2 md:mb-0">
            <h1 className="mb-4 text-3xl font-semibold">The Present and Future of Web3</h1>
            <p className="mb-6 text-lg">
              There is a huge demand online for Community Anything: Managers, Directors, and Leads. Even more traditionally technical positions, like Developers, are seeking Evangelists and Advocates like never before. The Web3 Community educates up-and-coming Web3 community professionals and leaders.
            </p>
            <p className="text-lg">
              Join us in shaping the future of Web3. Together, we&apos;ll explore the opportunities and challenges of this exciting technology landscape.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            {/* Place the SVG code here */}

            <LogoSvg />
          </div>
        </section>
        <section className="mb-8">
          {/* Add your other sections */}
          <FeaturedBlogs />
          <UpcomingEvents />
          <Goals />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
