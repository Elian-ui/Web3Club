export const dynamic = 'force-dynamic'
import React, { Suspense } from 'react';
import Link from 'next/link'
import BlogList from './BlogList';
import { getBlogs } from './GetBlogs';

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
