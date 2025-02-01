import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMediaNavigtion = (routePath) => {
    const URl = routePath.startsWith("http") ? routePath : `https://${routePath}`;
    window.open(URl, "_blank", "noopener,noreferrer");
}


const LandingPageButtons = ({ icon, routePath }) => {
    return (
        <button className="w-14 h-14 border-black border-2 rounded-md flex  justify-center items-center hover:bg-black hover:text-white transition duration-300 ease-in-out" onClick={() => socialMediaNavigtion(routePath)}>
            <FontAwesomeIcon icon={icon} size='xl' />
        </button>
    );
};

export default LandingPageButtons;


