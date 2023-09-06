'use client'
import React, { useState } from 'react';
import AddEventForm from './AddEventForm';

const AddEvent = () => {
    const [isPublishing, setIsPublishing] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState({
        startDateTime: "", endDateTime: ""
    })

    const [imageURL, setImageURL] = useState<string | null>(null)

    const handlePublish = async () => {
        if (content.length > 0 && title.length > 0 && (imageURL?.length! > 0)) {
            try {
                setIsPublishing(true)
                const res = await fetch('/api/events', {
                    headers: {
                        'content-type': 'apllication/json'
                    },
                    method: 'POST', body: JSON.stringify({
                        title, content, image: imageURL, date
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
                <h2 className="mb-2 text-xl font-semibold">Add New Event</h2>
                <AddEventForm
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    handlePublish={handlePublish}
                    isPublishing={isPublishing}
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                    date={date}
                    setDate={setDate}
                />
            </div>
        </div>
    );
};

export default AddEvent;
