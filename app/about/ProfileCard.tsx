import Image from 'next/image';
import React from 'react';

interface Profile {
    name: string;
    role: string;
    image: string;
}

const ProfileCard: React.FC<Profile> = ({ name, role, image }) => {
    return (
        <div className="p-4 rounded-md shadow-md dark:bg-gray-800">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="mx-auto mb-2 rounded-full"
            />
            <h3 className="mb-2 text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{role}</p>
        </div>
    );
};

export default ProfileCard;
