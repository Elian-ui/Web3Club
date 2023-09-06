
import ImageUpload from '@/app/_comps/ImageUpload';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DateTimePicker from '../_comps/DateTimePicker';

interface AddBlogFormProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    handlePublish: () => Promise<void>;
    isPublishing: boolean;
    setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
    imageURL: string | null;
    date: any;
    setDate: any
}
const AddBlogForm: React.FC<AddBlogFormProps> = ({
    title,
    setTitle,
    content,
    setContent,
    handlePublish,
    isPublishing,
    setImageURL,
    imageURL, date,
    setDate
}) => {
    return (
        <div className=''>
            <div className="grid flex-grow grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-4 bg-gray-100 border rounded">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full p-2 text-black placeholder-black border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <ReactQuill
                            value={content}
                            theme="snow"
                            onChange={setContent}
                            placeholder="Write your blog content..."
                            className="text-black placeholder-black focus:outline-none focus:border-blue-300"
                        />
                    </div>
                </div>
                <div className="p-4 border rounded">
                    <h2 className="mb-2 text-lg font-semibold">Preview</h2>
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
            <ImageUpload setImageURL={setImageURL} folder='events' />
            <DateTimePicker date={date} setDate={setDate} />
            {imageURL && <div>Image Uploaded</div>}
            <button
                onClick={handlePublish}
                className="px-4 py-2 mt-4 text-white bg-blue-500 border rounded"
                disabled={isPublishing}
            >
                {isPublishing ? 'Publishing...' : 'Publish'}
            </button>

        </div>
    );
};

export default AddBlogForm;
