import React from 'react';

const goalsData = [
    {
        title: 'Service DAO',
        description: "We're sourcing the most cutting edge Community building strategies, programming, integrations, and execution by coordinating a DAO.",
    },
    {
        title: 'Education',
        description: "We're designing curriculum and modules that aim to bring in the next wave of Community professionals to Ethereum and Web3.",
    },
    {
        title: 'Open Source',
        description: "We're curating the best Community humans and resources in the space. With the goal to package and share our learnings with the wider Ethereum community, as a shared consciousness of Community coordination, for others to adopt and adapt.",
    },
    // Add more goals
];

const Goals = () => {
    return (
        <section className="mb-8">
            <h2 className="p-4 pl-0 text-2xl font-semibold">Goals</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {goalsData.map((goal, index) => (
                    <div key={index} className="p-4 shadow-md dark:shadow-white">
                        <h3 className="mb-2 text-xl font-semibold">{goal.title}</h3>
                        <p className="mb-4 text-gray-400">{goal.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Goals;
