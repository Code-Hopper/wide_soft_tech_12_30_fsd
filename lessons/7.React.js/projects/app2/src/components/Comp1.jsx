import "./styles/style.scss"
function Comp1(props) {
    return (
        <div id="comp1">
            <h1>hello {props.name} your age is {props.age}</h1>
            <h1>{props.koiBhi}</h1>
            <h1>This is Component 1</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}

export { Comp1 }