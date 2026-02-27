import { ProjectCard } from "./ProjectCard"
import { Title } from "./Title"
import { type ProjectCardProps } from "./ProjectCard"


const mock: ProjectCardProps = {
    imageUrl: "assets/image5.svg",
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