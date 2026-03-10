
export interface Props {
    params: Skills[]
}

export interface Skills {
    title: string
    skills_list: string[]
    background: string
    icon: string
    index?: number
}

export const SkillSet = (props: Props) => {
    return (
        <div className="skillset-container">
            {props.params.map((skill) => (
                <div className="skillset-card" style={{ backgroundColor: skill.background }}>
                    <h3 className="skillset-title">{skill.title}</h3>
                    <ul className="skillset-list">
                        {skill.skills_list.map((skill) => (
                            <li className="skillset-item" key={skill}>{skill}</li> 
                        ))} 
                    </ul>
                    <img src={skill.icon} alt={`${skill.title} icon` } className="skillset-icon" />
                </div>
            ))}
        </div>
    )
}