import React from 'react';
import { getBlogs } from '../blogs/GetBlogs';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

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
  console.log(featuredblogs.length > 0 && featuredblogs[0]);

  return (
    <div>
      <div className='p-4 pl-0 text-xl font-bold'>Featured Blogs</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredblogs.data.slice(0, 2).map((blog: BlogData) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="p-4 shadow-md dark:shadow-white">
              <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
              <Image src={blog.image} alt={blog.title} width={200} height={200} className='w-full' quality={100} />
              <div className="mb-4 overflow-hidden text-gray-400 text-ellipsis">{parse(blog.content.split('<p>').join('</p>').slice(0, 250))}</div>
              {/* <Link href={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">Read more</Link> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
