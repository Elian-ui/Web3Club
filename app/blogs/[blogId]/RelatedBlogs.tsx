import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser'

interface Blog {
    id: number;
    title: string;
    image: string;
    content: string;
}

interface RelatedBlogsProps {
    blogs: Blog[];
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogs }) => {
    return (
        <div className="">
            <h3 className="mb-4 text-lg font-semibold">Related Blogs</h3>
            <div className="grid grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
                {blogs.map(blog => (
                    <Link href={`/blogs/${blog.id}`} key={blog.id} className="p-4 mb-2 rounded-md shadow-md dark:shadow-white">
                        <Image
                            src={blog.image}
                            alt={`Image for ${blog.title}`}
                            width={300}
                            height={200}
                            className="mb-2 rounded"
                        />
                        <h4 className="mb-2 text-base font-semibold">{blog.title}</h4>
                        {/* <div className="mb-4 overflow-hidden text-gray-400 text-ellipsis">{parse(blog.content.split('<p>').join('</p>').slice(0, 100))}</div> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedBlogs;
