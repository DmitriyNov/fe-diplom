export default function Instruction ({props}) {

    const {icon, text} = props;

    return (
        <div className="instruction">
            <div className="instruction__icon-container">
                <img className="instruction__icon" src={icon}/>
            </div>
            <span className="instruction__text">
                {text}
            </span>
        </div>
    )
}