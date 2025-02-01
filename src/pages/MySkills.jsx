import React from 'react'
import SkillsButton from '../components/SkillsButton';

const MySkills = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div className="flex justify-center items-center">
        <div className="text-5xl">My <span className="font-extrabold" >Skill</span></div>
      </div>
      <div className="flex justify-center lg:justify-start flex-wrap gap-3 mt-10 ">
        <SkillsButton icon={"icon-javscript.svg"} label={"JavaScript"} alt={"JavaScript Logo"} />
        <SkillsButton icon={"icon-typescript.svg"} label={"TypeScript"} alt={"TypeScript Logo"} />
        <SkillsButton icon={"icon_angular.svg"} label={"Angular"} alt={"Angular Logo"} />
        <SkillsButton icon={"icon-react.svg"} label={"React"} alt={"React Logo"} />
        <SkillsButton icon={"icon-nodejs.svg"} label={"Node"} alt={"Node Logo"} />
        <SkillsButton icon={"icon-express.svg"} label={"Express"} alt={"Express Logo"} />
        <SkillsButton icon={"icon-mongodb.svg"} label={"Mongo DB"} alt={"Mongo DB Logo"} />
        <SkillsButton icon={"icon-HTML.png"} label={"HTML"} alt={"HTML Logo"} />
        <SkillsButton icon={"icon-CSS.svg"} label={"CSS"} alt={"CSS Logo"} />
        <SkillsButton icon={"icon-sass.svg"} label={"Sass"} alt={"Sass Logo"} />
        <SkillsButton icon={"icon-tailwindcss.svg"} label={"Tailwind"} alt={"Tailwind Logo"} />
        <SkillsButton icon={"bootstrap-logo-black.svg"} label={"Bootstrap"} alt={"Bootstrap Logo"} />
        <SkillsButton icon={"icon-git.svg"} label={"Git"} alt={"Git Logo"} />
      </div>
    </div>
  )
}

export default MySkills