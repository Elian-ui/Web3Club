import { NextResponse, NextRequest } from 'next/server';

import firebase from 'firebase/app';
import { getServerSession } from 'next-auth/next'
import { getSession } from 'next-auth/react';
import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { authOptions } from '../auth/[...nextauth]/route';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI9EXsfDvWXa3fbWYCHbz3CuuW_tfUO1k",
    authDomain: "web3clubafrica.firebaseapp.com",
    projectId: "web3clubafrica",
    storageBucket: "web3clubafrica.appspot.com",
    messagingSenderId: "887862240635",
    appId: "1:887862240635:web:01c91207fa30928b8e09de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }


export const GET = async () => {
    try {
        // Retrieve blog data from Firestore

        const blogs = [];
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
            blogs.push({ id: doc.id, ...doc.data() });
        });

        return NextResponse.json({ data: blogs });
    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }
};


export const POST = async (req, res) => {
    try {
        return NextResponse.json({ message: 'message' })
    } catch (error) {
        return NextResponse.json({ error })
    }

};

