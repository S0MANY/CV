

function BtnLink(props) {
    return (
        <>
            <div
            className={`btn ${props.theme === "dark" ? "dark" : ""} ${props.size === "s" ? "small" : ""} ${props.className ? {} : ""} `
                }>
                <p>
                    {props.link ? <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a> : props.text}
                </p>
            </div>
        </>
    )
}
    
export {BtnLink}