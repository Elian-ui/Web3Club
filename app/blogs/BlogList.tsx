'use client'
import React, { useState } from 'react';
import BlogPost from './BlogPost';

interface BlogListProps {
    blogs: post[];
}

interface post {
    id: any,
    title: string;
    author: string;
    image: string;
    date: {
        seconds: number;
        nanoseconds: number;
    };
    content: string;
};



const ITEMS_PER_PAGE = 3;

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visiblePosts = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE); // Calculate based on the number of blogs

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}

            <div className="flex justify-center mt-4 col-span-full">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-2 py-1 rounded ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-800'
                            }`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
