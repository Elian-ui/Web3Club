import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar } from 'react-feather';

interface Event {
    id: number | string;
    title: string;
    startTime: string;
    stopTime: string;
    location: string;
    content: string;
    image: string; // Replace with the actual image URL
    eventDate: any,
    date: any
}

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="p-4 rounded-md shadow-md dark:bg-gray-800">
            <div className="w-full h-32 mb-2 overflow-hidden rounded-md">
                <Image
                    src={event.image} // Replace with the actual image URL
                    alt={`Image for ${event.title}`}
                    layout="responsive"
                    width={500}
                    height={320}
                />
            </div>
            <h2 className="mb-2 text-lg font-semibold">{event.title}</h2>
            <div className="mb-2">
                <p className="flex items-center gap-2 mb-1 dark:text-gray-300">
                    <Calendar className='w-6 h-6' />
                    {new Date(event.eventDate.startDateTime).toDateString()} | {new Date(event.eventDate.startDateTime).toTimeString()} - {new Date(event.eventDate.startDateTime).toLocaleTimeString()}
                </p>
            </div>
            {/* <p className="flex items-center gap-2 mb-2 dark:text-gray-300">
                <MapPin className="w-6 h-6" />
                {event.location}
            </p> */}
            {/* <p className="text-sm">{event.content}</p> */}
        </div>
    );
};

export default EventCard;
