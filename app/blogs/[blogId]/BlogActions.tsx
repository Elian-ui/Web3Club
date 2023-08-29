import React, { Suspense } from 'react';
import AddComment from './AddComment';
import SocialButtons from './SocialButtons';
import Loader from '@/app/_comps/Loader';

interface Comment {
    username: string;
    content: string;
}

interface BlogActionsProps {
    likes: number;
    comments: Comment[];
}

const BlogActions: React.FC<BlogActionsProps> = ({ likes, comments }) => {

    return (
        <div className="mt-4">
            <div className="p-4 border rounded-md dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold">Comments</h3>
                <div className='overflow-y-auto h-36 '>
                    <Suspense fallback={<Loader width='20px' height='20px' />}>
                        {comments?.map((comment, index) => (
                            <div key={index} className="flex mb-2">
                                {/* <img
                            src={comment.user.image}
                            alt={`${comment.user.name}'s profile`}
                            className="w-8 h-8 mr-2 rounded-full"
                        /> */}
                                <div>
                                    <p className="font-semibold">{comment.username}</p>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </Suspense>
                </div>
                <AddComment />



                <SocialButtons />


            </div>
        </div>
    );
};

export default BlogActions;
