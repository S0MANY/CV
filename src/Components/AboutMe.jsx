
function AboutMe(props) {
    return (
        <>
            <div className={`about ${props.theme === "dark" ? "dark" : ""}`}>
                <h2>Информация о себе</h2>

                <ul className="list">
                    <li className="about__info">
                        <p><strong>Личная информация</strong></p>
                        <ul>
                            <li><strong>Возраст: </strong> 22 года</li>
                            <li><strong>Место проживания: </strong> Тольятти ( Готов к переезду )</li>
                            <li><strong>Текущая деятельность: </strong>Обучение в магистратуре по направлению "Менджмент"</li>
                        </ul>
                    </li>
                    <li className="about__feat">
                        <p><strong>Личные качества</strong></p>
                        <ul>
                            <li>Ответсвенность</li>
                            <li>Желание работать в команде</li>
                        </ul>
                    </li>
                    <li className="about__educ">
                        <p><strong>Образование и опыт</strong></p>
                        
                        <ul>
                            <li>
                                <p><strong>Начало карьеры:</strong> Программирование на языке Python</p>
                                <ul className="sub">
                                    <li>- Основные навыки: написание скриптов для автоматизации</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Текущая специальность:</strong></p>
                                <ul className="sub">
                                    <li>- Изучение Frontend технологий</li>
                                    <li>- Элементы Backend</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                    <li className="about__self">
                        <p><strong>Личные качества</strong></p>
                        <ul >
                            <li>Ответсвенность</li>
                            <li>Желание работать в команде</li>
                        </ul>
                    </li>
                    <li className="about__selffeat">
                        <p><strong>Личностные качества</strong></p>
                        <ul>
                        <li>Охотно воспринимаю новую информацию</li>
                        <li>
                            <p>Готов восполнять недостающие навыки:</p>
                            <ul className="sub">
                                <li>- Самостоятельно</li>
                                <li>- С помощью наставника</li>
                            </ul>
                        </li>
                       
                        </ul>
                    </li>
                    <li className="about__self">
                        <p><strong>Желаемая заработная плата</strong></p>
                        <ul >
                            <li>150 000 т.р.</li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
            


        </>
    )
}

export {AboutMe}