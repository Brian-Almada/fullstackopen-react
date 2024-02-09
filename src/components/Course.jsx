
const Header = () => {
    
    return (
        <div>
            <h1>Web development curriculum</h1>
        </div>
    )
}
/*
const Total = (props) => {

    const totalCourses = (sum, part) => sum + part.exercises
    const parts = props.course.parts
    const total = parts.reduce(totalCourses, 0)

    return (
        <div>
            <p>Number of exercises {totalCourses}</p>
        </div>
    )
}
*/
const Content = ({course}) => {
    console.log(course)

    return (
        <>
            {course.map(courseName => (
                <div key={courseName}>
                    <h3>{courseName.name}</h3>
                    <div>
                        {courseName.parts.map(part => (
                            <p key={part.id}>{part.name} {part.exercises}</p>
                        ))}
                    </div>
                </div>
            )    )}
        </>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header />
            <Content course={course} />

        </div>
    )
}

export default Course