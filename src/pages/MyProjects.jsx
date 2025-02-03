import React from 'react'
import ProjectCard from '../components/ProjectCard'

const myProjects = [
    { ID: "01", image: "My-Project-one.png", alt: "Project-Image", name: "E-Research Administration Tool", description: "Played a key role in developing a user-friendly e-research administration tool using JavaScript. Collaborated with a US-based team, ensuring code quality through continuous reviews and meetings. This experience strengthened my front-end development skills and ability to work in an international team setting." },
    { ID: "02", image: "My-Project-two.png", alt: "Project-Image", name: "Your Inclusion", description: "Designed and developed a web application from scratch using Angular, TypeScript, SCSS, HTML, and Bootstrap. Created sophisticated UI designs and integrated APIs for seamless functionality, enhancing both user experience and performance. This project strengthened my expertise in front-end development and API integration." },
    { ID: "03", image: "My-Project-three.png", alt: "Project-Image", name: "Auditorium Booking Web App– Mobile Design", description: "Designed a user-friendly mobile interface for an auditorium booking web application using React, HTML, and Tailwind CSS. Focused on creating an intuitive experience for seamless on-the-go bookings, collaborating closely with the development team to ensure alignment with overall functionality and UX goals." }
]

const MyProjects = () => {
    return (
        <div className='bg-black w-100 h-auto text-white'>
            <div className='flex flex-col justify-center items-center p-2 lg:p-10'>
                <div className='text-4xl lg:text-5xl pb-10'>My <span className='text-4xl lg:text-5xl font-extrabold'>Projects</span></div>
                <div>
                    <ProjectCard projectList={myProjects} />
                </div>
            </div>
        </div>
    )
}

export default MyProjects