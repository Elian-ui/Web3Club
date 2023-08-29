import React from 'react';
import ResourceList from './ResourceList'; // Import the ResourceList component

const resources = [
    {
        id: 1,
        title: 'Getting Started with React',
        description: 'Learn the basics of React.js',
        link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
        id: 2,
        title: 'CSS Tricks',
        description: 'A collection of helpful CSS tips and tricks',
        link: 'https://css-tricks.com/',
    },
    // Add more resources here
];

const ResourcesPage = () => {
    return (
        <ResourceList resources={resources} />
    );
};

export default ResourcesPage;
