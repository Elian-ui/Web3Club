import { NextResponse, NextRequest } from 'next/server';


import { getServerSession } from 'next-auth/next'

import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore";


import { authOptions } from '../auth/[...nextauth]/route';
import { db } from '@/firebaseConfig';



export const GET = async () => {
    try {
        // Retrieve blog data from Firestore

        const blogs: any = [];
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc: any) => {
            blogs.push({ id: doc.id, ...doc.data() });
        });

        return NextResponse.json({ data: blogs });
    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }
};


export const POST = async (request: Request, res: Response) => {
    try {
        //     // Retrieve blog data from Firestore
        //     const body = await request.json()
        //     const blogs = { name: body }
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

        // Get the blog data from the POST request body
        const { title, content, image } = body;

        // Prepare the blog object

        const newBlog = {
            title,
            content,
            author: session?.user?.name,
            image,
            uploader: {
                userId: session?.user?.id,
                username: session?.user?.name
            },
            date: serverTimestamp()
        };
        console.log(newBlog);

        // Add the new blog to Firestore
        const newBlogRef = await addDoc(collection(db, "blogs"), newBlog);

        return NextResponse.json({ data: newBlogRef.id, message: 'Blog added successfully' });


        // Handle other HTTP methods if needed

    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }

}


export const DELETE = async (request: Request, res: Response) => {
    try {
        const { searchParams } = new URL(request.url)
        const postId = searchParams.get('postId'); // Get the postId from the query parameters
        console.log(searchParams);

        const session: any = await getServerSession(authOptions);

        // Check if the user is authenticated
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Retrieve the blog data from Firestore
        const blogDocRef = doc(db, 'blogs', postId as string);
        const blogSnapshot = await getDoc(blogDocRef);
        const blogData: any = blogSnapshot.data();
        console.log(blogData);

        // Check if the user is authorized to delete the blog
        if (blogData.uploader.userId !== session.user.id) {
            return NextResponse.json({ error: 'Cannot delete this blog' }, { status: 500 });
        }

        // Delete the blog
        await deleteDoc(blogDocRef);

        // Respond with success message
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ error: 'An error occurred while deleting the blog' }, { status: 500 });
    }
};
