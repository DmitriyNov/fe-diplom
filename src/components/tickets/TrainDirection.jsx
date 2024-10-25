import { ArrowThere, ArrowBack } from "../icons/Icons";

export default function TrainDirection (props) {

    const {direction, fromCity, fromStation, toCity, toStation, times} = props;

    return (
        <div className="train__times_direction-container">
            <div className="train__times_direction-from">
                <span className="train__times-time">{times.from}</span>
                <span className="train__times-city">{fromCity}</span>
                <span className="train__times-station">{fromStation}</span>
            </div>
            <div className="train__times_duration-container">
                <span className="train__times-duration">{times.duration}</span>
                {(direction === "there") ? <ArrowThere /> : (direction === "back") ? <ArrowBack /> : null}
            </div>
            <div className="train__times_direction-to">
                <span className="train__times-time">{times.to}</span>
                <span className="train__times-city">{toCity}</span>
                <span className="train__times-station">{toStation}</span>
            </div>
        </div>
    )
}