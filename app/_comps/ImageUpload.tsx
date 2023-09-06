'use client'
import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from '@firebase/storage';
import { app } from '@/firebaseConfig';

interface FileUploaderProps {
    onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div className="mt-4">
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};
interface ImageUploadProps {
    folder: string;
    setImageURL: React.Dispatch<React.SetStateAction<string | null>>;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ setImageURL, folder }) => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [downloadURL, setDownloadURL] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    const handleFileUpload = async (file: File) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, `uploads/${folder}` + file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error('Error uploading:', error);
            },
            async () => {
                console.log('File uploaded successfully');
                const url = await getDownloadURL(storageRef);
                setDownloadURL(url);
                setUploadedFile(file);
                setUploadProgress(0);
                setImageURL(url)
            }
        );
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Attach Cover Image</h1>

            <FileUploader onFileUpload={handleFileUpload} />

            {uploadProgress > 0 && (
                <div className="mt-4">
                    Uploading: {uploadProgress.toFixed(2)}%
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
