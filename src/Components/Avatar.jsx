import ava from "../img/ava.jpg"


function Avatar(props){
    return(
        <>
            <div className={`avatar ${props.theme === "dark" ? "dark" : ""}`}>
            <img src={ava} alt="My avatar" />
            </div>
        </>
    )
}

export {Avatar}