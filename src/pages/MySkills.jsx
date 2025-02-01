import React from 'react'
import SkillsButton from '../components/SkillsButton';

const MySkills = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div className="flex justify-center items-center">
        <div className="text-5xl">My <span className="font-extrabold" >Skill</span></div>
      </div>
      <div className="flex justify-center lg:justify-start flex-wrap gap-3 mt-10 ">
        <SkillsButton icon={"icon-javscript.svg"} label={"JavaScript"} alt={""} />
        <SkillsButton icon={"icon-typescript.svg"} label={"TypeScript"} alt={""} />
        <SkillsButton icon={"icon_angular.svg"} label={"Angular"} alt={""} />
        <SkillsButton icon={"icon-react.svg"} label={"React"} alt={""} />
        <SkillsButton icon={"icon-nodejs.svg"} label={"Node"} alt={""} />
        <SkillsButton icon={"icon-express.svg"} label={"Express"} alt={""} />
        <SkillsButton icon={"icon-mongodb.svg"} label={"Mongo DB"} alt={""} />
        <SkillsButton icon={"icon-sass.svg"} label={"Sass"} alt={""} />
        <SkillsButton icon={"icon-tailwindcss.svg"} label={"Tailwind"} alt={""} />
        <SkillsButton icon={"icon-git.svg"} label={"Git"} alt={""} />
        <SkillsButton icon={"icon-HTML.png"} label={"HTML"} alt={""} />
        <SkillsButton icon={"icon-CSS.svg"} label={"CSS"} alt={""} />
      </div>
    </div>
  )
}

export default MySkills