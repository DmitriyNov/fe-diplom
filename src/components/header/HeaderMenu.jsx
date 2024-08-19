export default function HeaderMenu (props) {
    
    const {menu} = props;

    return (
        <div className="header__menu">
            {menu.map((item, i) => (
                <span key={i} className="header__menu-item">{item}</span>
            ))}
        </div>
    )
}