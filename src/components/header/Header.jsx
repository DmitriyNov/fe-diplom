import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function Header () {
    
    const menu = [
        {
            text: "О нас",
            link: "about",
        },
        {
            text: "Как это работает",
            link: "how",
        },
        {
            text: "Отзывы",
            link: "reviews",
        },
        {
            text: "Контакты",
            link: "footer",
        }
    ];
        
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderMenu menu={menu} />
        </header>
    )
}