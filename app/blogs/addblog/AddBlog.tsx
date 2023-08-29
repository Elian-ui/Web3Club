'use client'
import React, { useState } from 'react';
import AddBlogForm, { } from '../addblog/AddBlogForm'

const AddBlog = () => {
    const [isPublishing, setIsPublishing] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [imageURL, setImageURL] = useState<string | null>(null)

    const handlePublish = async () => {
        if (content.length > 0 && title.length > 0 && (imageURL?.length! > 0)) {
            try {
                setIsPublishing(true)
                const res = await fetch('/api/blogs', {
                    headers: {
                        'content-type': 'apllication/json'
                    },
                    method: 'POST', body: JSON.stringify({
                        title, content, image: imageURL
                    })
                })
                const json = await res.json()
                if (res.ok) {

                    setIsPublishing(false)
                    setTitle('')
                    setContent('')

                }
                console.log(json);
            } catch (error) {
                console.log(error);
                setIsPublishing(false)
            }
        }
    };



    return (
        <div className="flex flex-col justify-center p-2 bg-gray-800 rounded shadow">
            <div className="">
                <h2 className="mb-2 text-xl font-semibold">Add New Blog</h2>
                <AddBlogForm
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    handlePublish={handlePublish}
                    isPublishing={isPublishing}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                />
            </div>
        </div>
    );
};

export default AddBlog;
