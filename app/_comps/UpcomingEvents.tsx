import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { getEvents } from '../events/_comps/getEvents';
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

const UpcomingEvents = async () => {
    const events = await getEvents()
    if (events.data.length < 0) {
        return <></>
    }
    else {
        return (
            <div>
                <div className='p-4 pl-0 text-xl font-bold '>Upcoming Events</div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.data.map((event: any) => (
                        <div key={event.id} className="p-4 shadow-md dark:shadow-white">
                            <Image src={event.image} alt={event.title} width={900} height={900} className="object-cover w-full h-48 mb-4 rounded" />
                            <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                            <p className="mb-2 text-gray-400">{new Date(event.eventDate.startDateTime).toDateString()}</p>
                            {/* <p className="mb-4 text-gray-400">{event.location}</p> */}
                            <Link href={`/events/${event.id}`} className="text-blue-500 hover:underline">Learn more</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default UpcomingEvents;
