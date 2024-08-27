export default function Step ({props}) {

    const {number, text, status, decore} = props;

    return (
        <div className={"step-container " + status + " " + decore}>
            <div className="step">
                <div className="step__number-container">
                    <span className="step__number">{number}</span>
                </div>
                <span className="step__text">{text}</span>
            </div>
        </div>
    )
}