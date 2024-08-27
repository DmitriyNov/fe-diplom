export default function About () {
    
    return (
        <div id={"about"} className="about">
            <span className="about__title">
                О НАС
            </span>
            <div className="about__text">
                <div className="about__accent"></div>
                <ul className="about__text-list">
                    <li className="about__text-item">
                        Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем<br/>все больше людей заказывают жд билеты через интернет.
                    </li>
                    <li className="about__text-item">
                        Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?<br/>Мы расскажем о преимуществах заказа через интернет.
                    </li>
                    <li className="about__text-item">
                        <span className="about__text-item-bold">
                            Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br/>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}