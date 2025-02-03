import React from 'react';
import Header from "../shared/Header";
import LandingPage from './LandingPage';
import MySkills from './MySkills';
import MyExperience from './MyExperience';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import Footer from '../shared/Footer';

const RootPage = () => {
    return (
        <div>
            <Header />
            <div className="mt-20" id="landingPageSection">
                <LandingPage />
            </div>
            <div id="mySkillsSection">
                <MySkills />
            </div>
            <div id="myExperienceSection">
                <MyExperience />
            </div>
            <div id="aboutMeSection">
                <AboutMe />
            </div>
            <div id="myProjectSection">
                <MyProjects />
            </div>
            <div id="contactMeSection">
                <ContactMe />
            </div>
            <Footer/>
        </div>
    )
}

export default RootPage