export const dynamic = 'force-dynamic'
import DetailedBlogPost from './DetailedBlogPost';
import { getBlogs } from '../GetBlogs';


const BlogPostPage = async ({ params }: { params: { blogId: number } }) => {


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
