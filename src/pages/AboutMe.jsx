import React from 'react'

const AboutMe = () => {
    return (
        <div className='p-2 md:pt-5 md:px-[100px] md:pb-[50px]'>
            <div className="flex justify-center item-center">
                <div className='text-5xl'>About <span className='text-5xl font-extrabold'>Me</span></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-10 lg:mt-20 ">
                <div className='flex-1 flex justify-center items-center'>
                    <img src="about-me-image.png" alt="about-me-image" />
                </div>
                <div className='flex flex-col gap-3 flex-1 text-base text-zinc-500'>
                    <span>
                        Hello! I'm an Electronics and Communication Engineer who made a bold leap into the world of software development, and it's been an exhilarating journey ever since. While my academic roots are in electronics, my true passion lies in creating powerful, intuitive software solutions that enhance user experiences.
                    </span>
                    <span className='font-bold'>Skills & Expertise</span>
                    <span>
                        I specialize in full-stack web development with a solid expertise in JavaScript, TypeScript, Angular, React, Node.js, Express, and MongoDB. I am also proficient in front-end technologies like HTML, CSS, SASS, Tailwind CSS, and Bootstrap, which help me build responsive, scalable, and aesthetically pleasing applications. Additionally, I'm well-versed in Git for version control, ensuring smooth collaboration and efficient project management.
                    </span>
                    <span className='font-bold'>Why Software Development?</span>
                    <span>
                        For me, software development is the perfect blend of creativity and logic. It excites me to transform abstract ideas into functional, impactful software solutions. The constant evolution of technology fuels my curiosity, and I enjoy the challenge of staying ahead of trends and mastering new tools that can push the boundaries of what’s possible.
                    </span>
                    <span className='font-bold'>My Philosophy</span>
                    <span>
                        I’m deeply committed to continuous learning. In an industry that’s always evolving, I strive to stay at the forefront by embracing new technologies, refining my skills, and tackling fresh challenges head-on. For me, every project is an opportunity to grow and innovate.
                    </span>
                    <span className='font-bold'>Let’s Connect</span>
                    <span>
                        Whether you're looking to collaborate on a project, discuss emerging tech trends, or simply exchange ideas, I would love to connect. I believe in the power of community and collaboration, and I'm always eager to build meaningful professional relationships.
                        <br />
                        Let's create, innovate, and make a difference together!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe