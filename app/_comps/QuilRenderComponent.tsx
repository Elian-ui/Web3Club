import React from 'react';

const QuillContentRender = ({ htmlContent }: any) => {
    return (
        <div className="prose">
            {/* Use the prose class to apply default Tailwind CSS styles */}
            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
            {<div className='text-white'>hello you</div>}
        </div>
    );
};

export default QuillContentRender;
