import React from 'react';
import Header from "../shared/Header";
import LandingPage from './LandingPage';
import MySkills from './MySkills';
import MyExperience from './MyExperience';
import AboutMe from './AboutMe';

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
        </div>
    )
}

export default RootPage