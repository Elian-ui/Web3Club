import React from 'react';
import Image from 'next/image';
const eventsData = [
    {
        title: 'Blockchain Conference 2023',
        date: 'August 25-27, 2023',
        location: 'Virtual Conference',
        image: '/block.jpg',
        link: '/events/1'
    },
    {
        title: 'Crypto Expo World 2023',
        date: 'September 10-12, 2023',
        location: 'New York City, USA',
        image: '/ai.jpg',
        link: '/events/2'
    },
    {
        title: 'DeFi Summit 2023',
        date: 'October 5-7, 2023',
        location: 'London, UK',
        image: '/block.jpg',
        link: '/events/3'
    },
    // Add more event data
];

const UpcomingEvents = () => {
    return (
        <div>
            <div className='p-4 pl-0 text-xl font-bold '>Upcoming Events</div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {eventsData.map((event, index) => (
                    <div key={index} className="p-4 shadow-md dark:shadow-white">
                        <Image src={event.image} alt={event.title} width={900} height={900} className="object-cover w-full h-48 mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                        <p className="mb-2 text-gray-400">{event.date}</p>
                        <p className="mb-4 text-gray-400">{event.location}</p>
                        <a href={event.link} className="text-blue-500 hover:underline">Learn more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
