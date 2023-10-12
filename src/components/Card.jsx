function Card (props) {
    // console.log(props.cardTitleProps);
    // console.log(props.cardBodyProps);
    // console.log(props.cardCodeProps);
    return (
        <div className="card-column">
            <figure className="card code-card">
                <h2 className="card-header">{props.cardTitleProps}</h2>
                <div className="card-body">
                    <p>{props.cardBodyProps}</p>
                </div>
                <pre className="code-block">
                    <code>{props.cardCodeProps}</code>
                </pre>
            </figure>
        </div>
    )
}
export default Card;