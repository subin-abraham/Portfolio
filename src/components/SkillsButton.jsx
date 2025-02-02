import React from 'react';


const SkillsButton = ({ icon, label, alt }) => {
    return (
        <div>
            <div className="w-32 h-32 border-black border-2 rounded-md flex flex-col justify-center items-center p-5">
                <img src={icon} alt={alt}/>
                <span className="text-md mt-2">{label}</span>
            </div>
        </div>
    )
}

export default SkillsButton