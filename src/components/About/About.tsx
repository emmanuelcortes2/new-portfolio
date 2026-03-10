import { SkillSet } from "../SkillSet/SkillSet"
import { Title } from "../Title/Title"
import { type Skills } from "../SkillSet/SkillSet"
import imageGeometry from "../../assets/ic_languages_mob.svg"
import imageGeometry2 from "../../assets/ic_skills.svg"
import imageGeometry3 from "../../assets/Group18.svg"

const Skills : Skills[] = [
    {
        title: "Frontend",
        skills_list: ["React", "Next.js", "Vite"],
        background: "#FEBF52",  
        icon: imageGeometry
    },
    {
        title: "Backend",
        skills_list: ["Node.js", "Nest.JS", "Python", "FastAPI"],
        background: "#1C528A", 
        icon: imageGeometry2
    },
    {
        title: "DevOps",
        skills_list: ["Docker", "Jenkins", "AWS"],
        background: "#E2505C", 
        icon: imageGeometry3
    }
]


export const About = () => {
    return (
        <section>
            <Title title="About" />
            <p> I can help you build a product , feature or website Look through some of my work and experience! 
                If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
            <SkillSet params={Skills}/>
        </section>
    )
}