import React from 'react';

function ProjectCard({ projectList }) {
    return (
        <div>
            {projectList.map((project, index) => (
                <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
                    <div className='flex justify-center items-center flex-1 w-100'>
                        <img className='w-96 h-80' src={project.image ? project.image : ""} alt={project.alt ? project.alt : ""} />
                    </div>
                    <div className='flex-1 w-100'>
                        <div className='text-5xl font-extrabold pt-2'>{project.ID ? project.ID : ""}</div>
                        <div className='text-3xl font-bold pt-2'>{project.name ? project.name : ""}</div>
                        <div className='text-base text-zinc-500 pt-2'>{project.description ? project.description : ""}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard