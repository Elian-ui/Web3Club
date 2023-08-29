import React from 'react';
import EventList from './EventList'; // Import the EventList component
import { events } from './EventData'; // Import your event data

const EventsPage = () => {
    return (
        <EventList events={events} />
    );
};

export default EventsPage;
