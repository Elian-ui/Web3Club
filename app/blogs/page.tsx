export const dynamic = 'force-dynamic'
import React, { Suspense } from 'react';
import Link from 'next/link'
import BlogList from './BlogList';
import { getBlogs } from './GetBlogs';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web 3 Club Africa | Blog - Exploring the Latest in Decentralized Technologies',
    description: 'Dive into insightful articles and guides on Web3 technologies. Stay informed about the evolving world of blockchain, decentralization, and their impact on Africa. Learn from experts and enthusiasts within the African Web3 community.',
}

const BlogsPage: React.FC = async () => {
    const blogs = await getBlogs()

    return (
        <div>
            <div className="container p-4 mx-auto">
                <div className='flex items-center justify-between mb-4'>
                    <h1 className="text-3xl font-semibold">Blogs</h1>
                    <Link href={'/blogs/addblog'} className='p-2 bg-gray-600 rounded'>AddBlog</Link>
                </div>
                <Suspense fallback={<div>Loading</div>}>
                    <BlogList blogs={blogs.data} />
                </Suspense>
                {/* <div className='text-white'>{JSON.stringify(blogs.data.length)}</div> */}
            </div>

        </div>
    );
};

export default BlogsPage;
