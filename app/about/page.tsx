import React from 'react';
import { MapPin } from 'react-feather';
import ProfileCard from './ProfileCard';
import LogoSvg from '../_comps/LogoSvg';
import Image from 'next/image';

const AboutUsPage = () => {
    const foundersAndOfficials = [
        {
            name: 'John Doe',
            role: 'Founder & CEO',
            image: '/ai.jpg', // Replace with actual image path
        },
        {
            name: 'Jane Smith',
            role: 'COO',
            image: '/ai.jpg', // Replace with actual image path
        },
        {
            name: 'Jane Smith',
            role: 'COO',
            image: '/ai.jpg', // Replace with actual image path
        },
        // Add more founders and officials
    ];

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-3xl font-semibold">About Web3 Club Africa</h1>
            <div className="flex flex-col gap-4 mb-4 md:flex-row">
                <div className="md:w-1/3">
                    <div className="hidden w-full md:block h-96">
                        <LogoSvg />
                    </div>
                    <div className="w-full md:hidden h-96">
                        <div className="relative w-full h-full">
                            <Image
                                src="/ai.jpg" // Replace with actual image path
                                alt="Web3 Club Africa"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <p className="dark:text-gray-200">
                        Welcome to Web3 Club Africa, your premier destination for exploring the decentralized future powered by blockchain technology.
                        We are a community of passionate individuals dedicated to educating, advocating, and innovating in the world of Web3.
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                        Our vision is to foster a vibrant ecosystem that embraces blockchain, cryptocurrencies, and decentralized applications (dApps).
                        Whether you&apos;re an aspiring developer, an investor, or simply curious about the potential of Web3, you&apos;re in the right place.
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                        At Web3 Club Africa, we are committed to bridging the knowledge gap and enabling access to the transformative power of blockchain.
                        Our team of experts and enthusiasts works tirelessly to provide insightful content, organize educational events, and create networking opportunities.
                        Join us on this exciting journey as we shape the future of technology and redefine the way we interact with digital systems.
                    </p>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <MapPin className="w-6 h-6 mr-2 text-gray-500" /> {/* Use your LocationIcon component */}
                <p className="text-gray-600 dark:text-gray-200">Headquartered in Kampala, Uganda</p>
            </div>
            <div className="mt-8">
                <h2 className="mb-2 text-xl font-semibold dark:text-gray-200">Founders & Top Officials</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {foundersAndOfficials.map((profile, index) => (
                        <ProfileCard
                            key={index}
                            name={profile.name}
                            role={profile.role}
                            image={profile.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
