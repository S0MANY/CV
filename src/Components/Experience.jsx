import { BtnLink } from "./BtnLink"

function Experience(props) {
    return (
        <>
            <div className={`experience ${props.theme === "dark" ? "dark" : ""}`}>
                <h2>Готовые проекты</h2>
                <ul>
                    <li>
                        <p><strong>Карточка товара</strong></p>
                        <p>Реализованы</p>
                        <ul>
                            <li>Адаптивная верстка</li>
                            <li>Java Script</li>
                            <li>Swiper</li>
                        </ul>
                        <BtnLink text={"Перейти на сайт"} link={"https://s0many.github.io/Catalog-elem/"} size={"s"} theme={props.theme}/>
                        {/* <p className="link"><a href="https://s0many.github.io/Catalog_element/" target="_blank">Ссылка</a></p> */}
                    </li>
                    <li>
                        <p><strong>Витрина товаров</strong></p>
                        <p>Реализованы</p>
                        <ul>
                            <li>Адаптивная верстка</li>
                            <li>React приложение</li>
                            <li>Работа с готовым API</li>
                        </ul>
                        <BtnLink text={"Перейти на сайт"} link={"https://s0many.github.io/fortnite_market/"} size={"s"} theme={props.theme}/>
                        {/* <p className="link"><a href="https://s0many.github.io/fortnite_store_app/" target="_blank">Ссылка</a></p> */}
                    </li>
                    <li>
                        <p><strong>Кулинарный сайт</strong></p>
                        <p>Реализованы</p>
                        <ul>
                            <li>Адаптивная верстка</li>
                            <li>React приложение</li>
                            <li>Роутинг</li>
                            <li>Работа с готовым API</li>
                            <li>Swiper</li>
                        </ul>
                        <BtnLink text={"Перейти на сайт"} link={"https://s0many.github.io/Cooking_finder/"} size={"s"} theme={props.theme}/>
                        {/* <p className="link"><a href="https://s0many.github.io/Cooking_react_app/" target="_blank">Ссылка</a></p> */}
                    </li>
            
                </ul>
            </div>
        </>
    )
}

export {Experience}