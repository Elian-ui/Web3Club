// BlogPost.tsx
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';

interface BlogPostProps {
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
    };
}



const BlogPost: React.FC<BlogPostProps> = ({ post }) => {

    const postDate = new Date(post.date.seconds * 1000 + post.date.nanoseconds / 1000000);

    return (
        <Link href={`blogs/${post.id}`} className="p-4 mb-4 overflow-hidden rounded shadow-md cursor-pointer dark:shadow-white">
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="mb-2 dark:text-gray-400 ">
                {postDate.toDateString()} by {post.author}

            </p>
            <Image
                src={post.image}
                alt={`Image for ${post.title}`}
                className="max-w-full mb-4"
                width={500}
                height={500}
            />
            <div className=''>{parse(post.content.slice(0, 200))}...</div>


            {/* Comment Section (Disqus) */}
            <div id="disqus_thread"></div>
        </Link>
    );
};

export default BlogPost;
