'use client'
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation'
import Loader from '@/app/_comps/Loader';
import { useSession } from "next-auth/react"



const AddComment = () => {
    const { data: session } = useSession()

    const [newComment, setNewComment] = useState('');
    const params = useParams()
    const router = useRouter()
    const [isCommenting, setisCommenting] = useState(false)

    const handleAddComment = async () => {
        console.log(params);
        setisCommenting(true)
        console.log(session);
        if (session)
            try {
                const res = await fetch('/api/comments',
                    {
                        method: 'POST', body: JSON.stringify({
                            comment: newComment,
                            postId: params.blogId
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                if (res.ok) {
                    setisCommenting(false)
                    setNewComment('')
                }
                const responseJson = await res.json()
                console.log(responseJson);

            } catch (error) {
                setisCommenting(false)
            }
        setisCommenting(false)
        router.refresh()

    }
    return (
        <div className="mt-4">
            <textarea
                className="w-full p-2 rounded-md resize-none dark:bg-gray-900"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            {!isCommenting ? <button
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md"
                onClick={handleAddComment}
            >
                Add Comment
            </button> : <Loader width='16px' height='16px' />}
        </div>
    );
};

export default AddComment;
