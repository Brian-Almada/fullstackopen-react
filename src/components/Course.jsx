
const Header = () => {
    
    return (
        <div>
            <h1>Web development curriculum</h1>
        </div>
    )
}

const Total = ({course}) => {

    const totalCourses = (sum, part) => sum + part.exercises
    const total = course.map(courseName =>
        courseName.parts.reduce(totalCourses, 0))
        console.log(total)
    return (
        <div>
            {total.map((total, i) => <p key={i + 1}>total of {total} exercises</p>)}
        </div>
    )
}

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
                        <Total course={course} />
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