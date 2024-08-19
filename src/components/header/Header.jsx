import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function Header () {
    
    const menu = ["О нас", "Как это работает", "Отзывы", "Контакты"];
        
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderMenu menu={menu} />
        </header>
    )
}