
function Contacts(props) {
    return(
        <>
            <div className={`contacts ${props.theme === "dark" ? "dark" : ""}`}>
                <div className="contacts__msg">
                    <div className="contacts__msg_title">Frontend Разработчик</div>
                    <div className="contacts__msg_name">
                        Постнов
                        <br />
                        Андрей
                    </div>
                </div>
                <div className="contacts__info">
                    <h2 className="contacts__info_title"><strong>Контактная информация</strong></h2>
                    <div className="contacts__info_number">Мобильный телефон: 8 (993) 408-47-07</div>
                    <div className="contacts__info_email">Почта: andrejpostnov117@gmail.com</div>
                    <div className="contacts__info_github">Github: <a href="https://github.com/S0MANY" target="_blank">Перейти на страницу Github</a></div>
                </div>
            </div>
        </>
    )
}

export {Contacts}