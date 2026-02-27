import { TechBadge } from "./TechBadge"

export interface ProjectCardProps {
    imageUrl: string
    title: string,
    technologies: Technologies[],
}

interface Technologies {
    name: string,
}


export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={props.imageUrl} alt="project image" className="project-image" />
            </div>
            <div className="project-title">
                {props.title}
            </div>
            <div className="project-technologies">
                {props.technologies.map((technology) => (
                    <TechBadge name={technology.name} />
                ))}
            </div>
            <div className="project-description">
                <button className="project-details">See this project </button>
            </div>
        </div>
    )
}