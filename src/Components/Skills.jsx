

function Skills(props) {
    return(
        <>
            <div className={`skills ${props.theme === "dark" ? "dark" : ""}`}>
                <h2>Специализация</h2>

                <ul className="list">
                    <li className="type">
                        <p><strong>Frontend:</strong></p>
                        <ul className="skill">
                            <li>Photoshop</li>
                            <li>HTML, CSS, Java Script</li>
                            <li>React</li>
                            <li>Работа с готовым API</li>
                        </ul>
                    </li>
                    <li className="type">
                        <p><strong>Backend:</strong></p>
                        <ul className="skill">
                            <li>FastApi</li>
                            <li>SQL</li>
                        </ul>
                    </li>
                    <li className="type">
                        <p><strong>Helpers:</strong></p>
                        <ul className="skill">
                            <li>Github</li>
                        </ul>
                    </li>
                </ul>
                
                
            </div>
        </>
    )
}

export {Skills}