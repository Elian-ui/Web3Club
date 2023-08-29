import React from 'react';
import { getBlogs } from '../blogs/GetBlogs';
import parse from 'html-react-parser';
import Link from 'next/link';

interface BlogData {
  id: any;
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
  };
}

const FeaturedBlogs: React.FC = async () => {
  const featuredblogs = await getBlogs();

  return (
    <div>
      <div className='p-4 pl-0 text-xl font-bold'>Featured Blogs</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredblogs.data.slice(0, 2).map((blog: BlogData) => (
          <div key={blog.id} className="p-4 shadow-md dark:shadow-white">
            <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
            <div className="mb-4 overflow-hidden text-gray-400 text-ellipsis">{parse(blog.content.split('<p>').join('</p>').slice(0, 250))}</div>
            <Link href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
