import React from 'react'

const ContactMeForm = () => {
    return (
        <div>
            <form className='flex flex-col gap-3 mb-5 lg:mb-0'>
                <input className='border border-black rounded-lg w-[350px] lg:w-[90%] lg:max-w-[500px] h-14 p-5' type="text" placeholder='Your Name' />
                <input className='border border-black rounded-lg w-[350px] lg:w-[90%] lg:max-w-[500px] h-14 p-5' type="email" placeholder='Email' />
                <input className='border border-black rounded-lg w-[350px] lg:w-[90%] lg:max-w-[500px] h-14 p-5' type="text" placeholder='Your website (If exists)' />
                <textarea className='border border-black rounded-lg w-[350px] lg:w-[90%] lg:max-w-[500px] p-5' placeholder='How can i help you?'></textarea>
                <button className='p-5 bg-black border-none rounded-lg w-[350px] lg:w-[90%] lg:max-w-[500px] text-white hover:bg-gray-900'>Get in touch</button>
            </form>
        </div>
    )
}

export default ContactMeForm