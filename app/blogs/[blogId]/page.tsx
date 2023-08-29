export const dynamic = 'force-dynamic'
import DetailedBlogPost from './DetailedBlogPost';
import { getBlogs } from '../GetBlogs';
import type { Metadata, ResolvingMetadata } from 'next'
import parse from 'html-react-parser';

type Props = {
    params: { blogId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const blogId = params.blogId

    // fetch data
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, { cache: 'no-store' })
        .then((res) => res.json())
    const post = posts.data.find((pos: { id: number | string; }) => pos.id == blogId);



    return {
        title: post.title,
        description: parse(post.content.split('<p>').join('</p>')).toString(),

    }
}

// export default function Page({ params, searchParams }: Props) { }

const BlogPostPage = async ({ params, searchParams }: Props) => {


    const { blogId } = params;

    // Find the blog post with the matching ID
    const posts = await getBlogs()
    const post = posts.data.find((pos: { id: number | string; }) => pos.id == blogId);

    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return (

        <DetailedBlogPost post={post} blogId={blogId} />

    );
};

export default BlogPostPage;
