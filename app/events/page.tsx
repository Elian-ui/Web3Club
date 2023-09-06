export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web 3 Club Africa | Events - Connecting the Community through Web3 Gatherings',
    description: 'Explore upcoming Web3 events that bring together professionals, leaders, and enthusiasts in Africa. Join insightful discussions, workshops, and networking opportunities within the dynamic world of decentralized technologies.',
}


import React from 'react';
import EventList from './EventList'; // Import the EventList component
import { getEvents } from './_comps/getEvents';

const EventsPage = async () => {
    const events = await getEvents()
    console.log(events.data);

    return (
        <EventList events={events.data} />
    );
};

export default EventsPage;
