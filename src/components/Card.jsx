function Card (props) {
    // console.log(props.cardTitleProps);
    // console.log(props.cardBodyProps);
    // console.log(props.cardCodeProps);
    console.log(props.cardCodeRolloverProps);
    return (
        <div className="card-column">
            <figure className="card code-card">
                <h2 className="card-header">{props.cardTitleProps}</h2>
                <div className="card-body">
                    <p>{props.cardBodyProps}</p>
                </div>
                <pre className="code-block">
                    <span data-descr={props.cardCodeRolloverProps}>
                        <code>{props.cardCodeProps}</code>
                    </span>
                </pre>
            </figure>
        </div>
    )
}
export default Card;