// Components for app.jsx

export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export function Button() {
    return <p>Button</p>
}

