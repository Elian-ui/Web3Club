import React from 'react';
import Link from 'next/link'

interface Resource {
    id: number;
    title: string;
    description: string;
    link: string;
}

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <div className="p-4 rounded-md shadow-md dark:bg-gray-800">
            <h2 className="mb-2 text-lg font-semibold">{resource.title}</h2>
            <p className="mb-2 dark:text-gray-300">{resource.description}</p>
            <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Learn More
            </Link>
        </div>
    );
};

export default ResourceCard;
