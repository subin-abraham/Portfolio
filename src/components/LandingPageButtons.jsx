import React from 'react';

const LandingPageButtons = ({ src, alt }) => {
    return (
        <button className="w-14 h-14 border-5 rounded-md flex  justify-center items-center">
            <img className='w-10/12' src={src} alt={alt} />
        </button>
    );
};

export default LandingPageButtons;
