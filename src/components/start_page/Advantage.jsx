export default function Advantage ({props}) {

    const {icon, text} = props;

    return (
        <div className="advantage">
            <div className="advantage__icon-container">
                <img className="advantage__icon" src={icon}/>
            </div>
            <span className="advantage__text">
                {text}
            </span>
        </div>
    )
}