import React from 'react';
import { MapPin, Mail, Phone } from 'react-feather';

const ContactPage: React.FC = () => {
    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <h2 className="mb-2 text-xl font-semibold">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-200">
                        Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you! Feel free to reach out using the contact information below.
                    </p>
                </div>
                <div>
                    <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
                    <div className="flex items-center mb-2">
                        <MapPin className="w-6 h-6 mr-2 text-gray-500" />
                        <p className="text-gray-600 dark:text-gray-200">123 Web3 Street, Decentraland</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <Mail className="w-6 h-6 mr-2 text-gray-500" />
                        <p className="text-gray-600 dark:text-gray-200">contact@web3club.africa</p>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-6 h-6 mr-2 text-gray-500" />
                        <p className="text-gray-600 dark:text-gray-200">+123 456 7890</p>
                    </div>
                </div>
            </div>

            <div className="w-1/2 mt-8">
                <h2 className="mb-2 text-xl font-semibold">Send us a Message</h2>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-gray-600 dark:text-gray-300">Name</label>
                        <input type="text" id="name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-gray-600 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 text-gray-600 dark:text-gray-300">Message</label>
                        <textarea id="message" rows={5} className="px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" />
                    </div>
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
