'use client'
import React, { useState } from 'react';
import EventCard from './EventCard';

interface Event {
    id: number;
    title: string;
    date: string;
    startTime: string;
    stopTime: string;
    location: string;
    description: string;
    image: string;
}

interface EventListProps {
    events: Event[];
}

const itemsPerPage = 6; // Number of events to show per page

const EventList: React.FC<EventListProps> = ({ events }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(events.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-semibold">Upcoming Events</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {events.slice(startIndex, endIndex).map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 text-white ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-300'
                            } rounded-md`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EventList;
