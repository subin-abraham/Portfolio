import React from 'react'
import ContactMeForm from '../components/ContactMeForm'

const contactMe = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center p-2 lg:p-10'>
            <div className='flex-1'>
                <ContactMeForm />
            </div>
            <div className=' flex flex-col flex-1'>
                <div className='text-5xl font-extrabold flex flex-col gap-2'>
                    <div>
                        <span>Let’s </span>
                        <span className='sm:text-outline-responsive lg:text-outline'>talk </span>
                        <span>for </span>
                    </div>
                    <div>Something special </div>
                </div>
                <div className='text-base text-zinc-500 mt-5'>Crafting seamless, engaging, and user-centric digital experiences that leave a lasting impact.</div>
                <div className='text-2xl font-semibold mt-10'>subinabraham63@gmail.com</div>
                <div className='text-2xl font-semibold mt-5'>+91 7356211346</div>
            </div>
        </div>
    )
}

export default contactMe