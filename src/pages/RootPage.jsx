import React from 'react';
import Header from "../shared/Header";
import LandingPage from './LandingPage';
import MySkills from './MySkills';

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
        </div>
    )
}

export default RootPage