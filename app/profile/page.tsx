'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { MySession } from '../api/auth/[...nextauth]/route';

const Profile: React.FC = () => {
    const { data: session } = useSession();
    const mySession: MySession = session as MySession;


    if (mySession) {
        return (
            <div>
                <h1>Profile</h1>
                <p>Google User ID: {mySession?.user?.id}</p>
                <p>Name: {session?.user?.name}</p>
                <p>Email: {session?.user?.email}</p>
                {/* <Image width={250} height={250} src={mySession?.user?.image} alt="User Profile" /> */}
                {/* ... other UI elements */}
            </div>
        );
    } else {
        return <p>Loading...</p>;
    }
}

export default Profile;
