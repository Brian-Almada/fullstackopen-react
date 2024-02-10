
const Header = () => {

    return (
        <div>
            <h1>Web development curriculum</h1>
        </div>
    )
}

const Part = ({part}) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const Content = ({parts}) => {
    console.log(parts)
    const totalCourse = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <>
            {
                parts.map((part) => {
                    <Part key={part.id} part={part}/>
                })
            }
            <b>total of {totalCourse} exercises</b>
        </>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course