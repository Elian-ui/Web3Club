import { NextResponse, NextRequest } from 'next/server';


import { getServerSession } from 'next-auth/next'

import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore";


import { authOptions } from '../auth/[...nextauth]/route';
import { db } from '@/firebaseConfig';



export const GET = async () => {
    try {
        // Retrieve event data from Firestore

        const events: any = [];
        const querySnapshot = await getDocs(collection(db, "events"));
        querySnapshot.forEach((doc: any) => {
            events.push({ id: doc.id, ...doc.data() });
        });

        return NextResponse.json({ data: events });
    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }
};


export const POST = async (request: Request, res: Response) => {
    try {
        //     // Retrieve event data from Firestore
        //     const body = await request.json()
        //     const events = { name: body }
        //     const session = await getServerSession(authOptions)

        //     return NextResponse.json({ data: session });
        // } catch (error) {
        //     return NextResponse.json({ error, status: 500 });
        // }
        const session: any = await getServerSession(authOptions);

        // Check if the user is authenticated
        if (!session) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }
        const body = await request.json()

        // Get the event data from the POST request body
        const { title, content, image, date } = body;

        // Prepare the event object

        const newEvent = {
            title,
            content,
            author: session?.user?.name,
            image,
            uploader: {
                userId: session?.user?.id,
                username: session?.user?.name
            },
            date: serverTimestamp(),
            eventDate: date
        };
        console.log(newEvent);

        // Add the new event to Firestore
        const newEventRef = await addDoc(collection(db, "events"), newEvent);

        return NextResponse.json({ data: newEventRef.id, message: 'Event added successfully' });


        // Handle other HTTP methods if needed

    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }

}


export const DELETE = async (request: Request, res: Response) => {
    try {
        const { searchParams } = new URL(request.url)
        const eventId = searchParams.get('eventId'); // Get the postId from the query parameters
        console.log(searchParams);

        const session: any = await getServerSession(authOptions);

        // Check if the user is authenticated
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Retrieve the event data from Firestore
        const eventDocRef = doc(db, 'events', eventId as string);
        const eventSnapshot = await getDoc(eventDocRef);
        const eventData: any = eventSnapshot.data();
        console.log(eventData);

        // Check if the user is authorized to delete the event
        if (eventData.uploader.userId !== session.user.id) {
            return NextResponse.json({ error: 'Cannot delete this event' }, { status: 500 });
        }

        // Delete the event
        await deleteDoc(eventDocRef);

        // Respond with success message
        return NextResponse.json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        return NextResponse.json({ error: 'An error occurred while deleting the event' }, { status: 500 });
    }
};
