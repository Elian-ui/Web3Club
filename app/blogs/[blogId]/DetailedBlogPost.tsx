import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import BlogActions from './BlogActions';


import RelatedBlogs from './RelatedBlogs';
import { getBlogComments } from '../GetBlogComments';
import { Delete, Trash, Trash2 } from 'react-feather';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next'
import DeletePost from './DeletePost';
import { getBlogs } from '../GetBlogs';


interface DetailedBlogPostProps {
    post: {
        id: any,
        title: string;
        author: string;
        image: string;
        date: {
            seconds: number;
            nanoseconds: number;
        };
        content: string;
        uploader: {
            userId: string;
            username: string;
        }
    };
    blogId: string | number
}

const DetailedBlogPost: React.FC<DetailedBlogPostProps> = async ({ post, blogId }) => {
    const { comments } = await getBlogComments({ blogId })
    const session: any = await getServerSession(authOptions);
    const blogs = await getBlogs()

    const postDate = new Date(post.date.seconds * 1000 + post.date.nanoseconds / 1000000);

    return (
        <div className="container p-6 mx-auto mt-10 rounded-lg shadow-lg">
            <div className='flex items-center justify-between'>
                <h2 className="mb-4 text-3xl font-semibold">{post.title}</h2>
                <DeletePost blogId={blogId} post={post} session={session} />
            </div>            <p className="mb-2 text-gray-500">
                {postDate.toDateString()} by {post.author}
            </p>
            <div className="w-full h-96 md:h-80">
                <Image
                    src={post.image} // Make sure 'post.image' is the URL of the image
                    alt={`Image for ${post.title}`}
                    width={500}
                    height={500}
                    quality={100}
                    className="self-center object-fill w-full h-full mb-4 rounded "
                />
            </div>

            <div className="mt-6 prose max-w-none">
                {parse(post.content)}
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                    <BlogActions
                        likes={42} // Pass the number of likes here
                        comments={comments}
                    />
                </div>
                <div>
                    <RelatedBlogs blogs={blogs.data} />
                </div>
            </div>
        </div>
    );
};

export default DetailedBlogPost;
