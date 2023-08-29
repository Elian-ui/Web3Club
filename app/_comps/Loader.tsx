import React from 'react';

interface LoaderProps {
    width: string;
    height: string;
}

const Loader: React.FC<LoaderProps> = ({ width, height }) => {
    const loaderStyle = {
        width,
        height,
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className="border-t-4 border-blue-500 border-opacity-75 rounded-full animate-spin"
                style={loaderStyle}
            ></div>
        </div>
    );
};

export default Loader;
