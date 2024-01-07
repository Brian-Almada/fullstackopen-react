const Total = (props) => {

    console.log(props)

    return (
        <div>
            <p>Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}</p>
        </div>
    )
}

export default Total