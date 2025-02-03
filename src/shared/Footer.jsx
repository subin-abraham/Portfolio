import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black w-100 h-auto text-white'>
            <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center font-semibold p-5 gap-3 lg:gap-0'>
                <div> Personal</div>
                <div className='flex flex-col justify-center items-center lg:justify-end'>
                    <div>Designed by Jhanvi Shah</div>
                    <div>Made In Figma</div>
                </div>
            </div>
        </div>
    )
}

export default Footer