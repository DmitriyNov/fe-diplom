import { Link } from "react-router-dom";

export default function HeaderMenu (props) {
    
    const {menu} = props;

    return (
        <div className="header__menu">
            {menu.map((item, i) => (
                <Link key={i} className="header__menu-item" to={"/main#" + item.link}>{item.text}</Link>
            ))}
        </div>
    )
}