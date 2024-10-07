

function Education(props) {
    return (
        <>
            <div className={`education ${props.theme === "dark" ? "dark" : ""}`}>
                <h2>Образование</h2>
                <ul className="list">
                    <li>
                        <p><strong>КНИТУ (2020-2024)</strong></p>
                        <ul>
                            <li>Технология и организация общественного питания</li>
                            <li>
                                <div className="ifGrad">
                                    <p>
                                        Диплом о профессиональной переподготовке по
                                        направлению "Алгоритмизация и программирование"
                                    </p>
                                    <div>
                                        <p onClick={() => props.setModal(true)} className={`showModal ${props.theme === "dark" ? "dark" : ""}`}>Посмотртеть диплом</p> 
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>HTML, CSS</strong></p>
                        <p><a href="https://stepik.org/course/120081/promo" target="_blank">Сслыка на курс</a></p>
                    </li>
                    <li>
                        <p><strong>Java Script</strong></p>
                        <p><a href="https://stepik.org/course/114165/?search=5536140066" target="_blank">Сслыка на курс</a></p>
                    </li>
                    <li>
                        <p><strong>React</strong></p>
                        <p><a href="https://stepik.org/course/114197/promo?search=5536140067" target="_blank">Сслыка на курс</a></p>
                    </li>
                    <li>
                        <p><strong>Python</strong></p>
                        <p>Самообучение</p>
                    </li>
                    <li>
                        <p><strong>FastAip | SQL</strong></p>
                        <p>Самообучение ( В процессе )</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export {Education}