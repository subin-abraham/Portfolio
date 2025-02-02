import React from 'react'

const MyExperienceCard = ({experiences}) => {
    return (
        <div>
            {experiences.map((job, index) => (

                <div className='border-2 border-zinc-500 rounded-lg flex flex-col justify-center items-center p-2 lg:p-5 mb-5'>
                    <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full'>
                        <div className='text-xl lg:text-2xl font-semibold text-center'>
                            {job.companyName? job.companyName : ''}
                        </div>
                        <div className='text-base text-zinc-300'>
                            {job.duration? job.duration : ''}
                        </div>
                    </div>
                    <div className='mt-5 text-base text-zinc-300 text-justify'>
                        {job.description? job.description : ''}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyExperienceCard