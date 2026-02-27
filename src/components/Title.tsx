interface Props {
    title: string
}

export const Title = (props: Props) => {
    return (
        <div className="title">    
            {props.title}
        </div>
    )
}