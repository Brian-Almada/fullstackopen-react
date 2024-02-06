
const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Total = (props) => {

    console.log(props)

    return (
        <div>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[3].exercises }</p>
        </div>
    )
}

const Content = (props) => {

    console.log(props)
    const parts = props.course.parts

    return (
        <div>
            {parts.map(part => (
                <p key = {part.id}>
                    {part.name} {part.exercises}
                </p>
            ))}
        </div>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course