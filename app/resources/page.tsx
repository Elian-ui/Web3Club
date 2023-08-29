import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web3 Club Africa | Resources - Your Hub for Web3 Learning and Insights',
    description: 'Access a wealth of resources on Web3 technologies. Browse through articles, guides, tutorials, and tools to enhance your understanding of blockchain, decentralization, and their applications in Africa. Learn from the best in the African Web3 community.',
}

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
