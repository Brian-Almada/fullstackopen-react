const Content = (props) => {

    console.log(props)

    return (
        <div>
            <p>
                {props.course[0].name} {props.course[0].exercises}
            </p>
            <p>
                {props.course[1].name} {props.course[1].exercises}
            </p>
            <p>
                {props.course[2].name} {props.course[2].exercises}
            </p>
        </div>
            )
}

export default Content