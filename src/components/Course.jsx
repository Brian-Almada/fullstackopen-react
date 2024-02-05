
const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
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
        </div>
    )
}

export default Course