import React from 'react';
import ResourceCard from './ResourceCard'; // Import the ResourceCard component

interface Resource {
    id: number;
    title: string;
    description: string;
    link: string;
}

interface ResourceListProps {
    resources: Resource[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-semibold">Resources</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default ResourceList;
