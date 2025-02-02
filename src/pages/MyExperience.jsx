import React from 'react';
import MyExperienceCard from '../components/MyExperienceCard';

const jobExperience = [
    { companyName: "Software Engineer at Polus Solutions", duration: "February 2023 - Present", description: "As a Frontend Developer, I designed and developed a user-friendly web application from scratch using Angular and JavaScript, ensuring a smooth and efficient user experience. I integrated APIs for seamless functionality and built responsive UI components. Collaborating with international teams, I contributed to project planning, development, and troubleshooting to deliver high-quality solutions." },
    { companyName: "Intern at LuminarTechnolab", duration: "August 2022 - February 2023", description: "Built and maintained web applications using the MEAN stack focusing on delivering efficient, scalable solutions. Developed RESTful APIs, integrated MongoDB for data management, and crafted responsive front-end interfaces with Angular, ensuring high performance and seamless user experiences." }
]

const MyExperience = () => {
    return (
        <div className='bg-black w-100 h-auto text-white'>
            <div className="flex flex-col justify-center items-center p-2 lg:p-10">
                <div className='text-4xl lg:text-5xl pb-10'>My <span className='text-4xl lg:text-5xl font-extrabold'>Experience</span></div>
                <div>
                    <MyExperienceCard experiences={jobExperience} />
                </div>
            </div>
        </div>
    )
}

export default MyExperience