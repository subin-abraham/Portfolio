import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'resume/Subin_Abraham_Resume.pdf';
        link.download = 'Subin_Abraham_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleScroll = (id) => {
        const navbarHeight = 60;
        const element = document.getElementById(id);

        window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative">
            <div className='fixed top-0 left-0 right-0 z-50 bg-white ps-10 pe-10 pt-5 pb-2 '>
                <div className='flex justify-between items-center font-semibold '>
                    <div className='flex gap-2 items-center justify-center cursor-pointer' onClick={() => handleScroll('landingPageSection')}> <img src="logo-personal.svg" alt="" /> Personal</div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                        </button>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                            <ul className='flex gap-10 font-semibold cursor-pointer'>
                                <li>About Me</li>
                                <li onClick={() => handleScroll('mySkillsSection')}>Skills</li>
                                <li>Project</li>
                                <li>Contact me</li>
                            </ul>
                        </div>
                        <button className='bg-black text-white p-3 rounded-md ml-10' onClick={handleDownload}>
                            Resume&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faDownload} size="sm" color="white" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4">
                        <button onClick={toggleMenu} className="mb-4 text-white">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                        <ul className='flex flex-col gap-4 font-semibold cursor-pointer'>
                            <li>About Me</li>
                            <li onClick={() => handleScroll('mySkillsSection')}>Skills</li>
                            <li>Project</li>
                            <li>Contact me</li>
                        </ul>
                        <button className='bg-white text-black p-3 rounded-md mt-4 w-full' onClick={handleDownload}>
                            Resume&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faDownload} size="sm" color="black" />
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}

            </div>
        </div>

    );
};

export default Header;