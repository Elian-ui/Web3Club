'use client'
import React from 'react'
import { Trash2 } from 'react-feather';
import { useRouter } from 'next/navigation'
interface DeletePostProps {
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
    blogId: string | number;
    session: any
}
const DeletePost: React.FC<DeletePostProps> = ({ post, session, blogId }) => {
    const router = useRouter()
    const handleDeletePost = async () => {
        try {
            const res = await fetch(`/api/blogs/?postId=${blogId}`, {
                method: 'DELETE', headers: {
                    'content-type': 'application/json'
                }
            })
            const json = await res.json()
            if (res.ok) {
                router.refresh()
                router.push('/blogs')
            }
            console.log(json);

        } catch (error) {
            console.log(error);

        }
    }
    if (post.uploader.userId === session?.user?.id) {
        return <span title='Delete blog' className='cursor-pointer' onClick={handleDeletePost}><Trash2 className='w-6 h-6 text-red-500' /></span>
    }
}

export default DeletePost