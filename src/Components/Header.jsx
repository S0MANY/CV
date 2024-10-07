

function Header(props) {

    function handleClick() {
        if (props.theme === "light"){
            document.getElementsByTagName("body")[0].classList.toggle("dark")
            props.func("dark")
        } else if (props.theme === "dark") {
            document.getElementsByTagName("body")[0].classList.toggle("dark")
            props.func("light") 
        }
        console.log(props.theme)
    }
    return (
        <header className={props.theme === "dark" ? "dark" : ""}>
            <img onClick={handleClick} style={{height:"50px"}} src={`https://img.icons8.com/?size=100&id=648&format=png&color=${props.theme === "dark" ? "EDE9DC" : "000000"}`} alt="theme toggler" />
        </header>
    )
}

export {Header}