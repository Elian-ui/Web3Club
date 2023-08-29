import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const SocialButtons = () => {
    return (
        <div className="flex gap-3 mt-4 flex-wrap">
            <button className="flex items-center px-4 py-2 bg-orange-500 rounded-md">
                <Heart className="w-5 h-5 mr-2" />
                Like
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-500 rounded-md">
                <Facebook className="w-5 h-5 mr-2" />
                Share on Facebook
            </button>
            <button className="flex items-center px-4 py-2 rounded-md bg-twitter-blue">
                <Twitter className="w-5 h-5 mr-2" />
                Tweet
            </button>

            <button className="flex items-center px-4 py-2 bg-pink-500 rounded-md">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
            </button>

            {/* Add more buttons as needed */}
        </div>
    );
};

export default SocialButtons;
