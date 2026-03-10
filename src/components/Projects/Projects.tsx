import { ProjectCard } from "../ProjectCard/ProjectCard"
import { Title } from "../Title/Title"
import { type ProjectCardProps } from "../ProjectCard/ProjectCard"
import projectImage from "../../assets/image5.svg"


const mock: ProjectCardProps = {
    imageUrl: projectImage,
    title: "Project name goes here",
    technologies: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "CSS" },
    ],
}
export const Projects = () => {
    return (
        <section className="project-container">
            <Title title="Projects" />
            <ProjectCard {...mock} />
        </section>
    )
}