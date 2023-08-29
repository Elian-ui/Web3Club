import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "@/firebaseConfig";


export const GET = async (request: Request) => {
    try {
        const { searchParams } = new URL(request.url)
        const postId = searchParams.get('postId'); // Get the postId from the query parameters

        // Create a reference to the subcollection for the specified post
        const commentRef = collection(db, "comments");

        const commentsQuery = query(commentRef, where("postId", "==", postId));


        const querySnapshot = await getDocs(commentsQuery);
        const commentsData: any = [];

        querySnapshot.forEach((doc) => {
            commentsData.push({ id: doc.id, ...doc.data() });
        });

        return NextResponse.json({ comments: commentsData });
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}



export const POST = async (request: Request, response: Response) => {
    try {
        const body = await request.json()
        const session: any = await getServerSession(authOptions);

        const { comment, postId } = body
        const newComment = {
            postId: postId,
            userId: session?.user?.id, // Replace with actual user ID
            username: session?.user?.name, // Replace with actual username
            content: comment,
            timestamp: serverTimestamp()
        };
        console.log(session);

        await addDoc(collection(db, 'comments'), newComment);
        return NextResponse.json({ message: 'Comment uploaded successfully' })
        // Refresh comments

    } catch (error) {
        return NextResponse.json({ error: 'Comment upload failed' })
    }
}