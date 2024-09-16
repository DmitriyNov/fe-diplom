import { TrainIcon, ArrowInText, ArrowThere, ArrowBack, Clock } from "../icons/Icons";

export default function PlacesInfo ({props}) {

    const {direction, number, startCity, fromCity, fromStation, toCity, toStation, times} = props;

    const separator = times.duration.indexOf(":");
    const hour = times.duration.slice(0, separator);
    const minutes = times.duration.slice(separator + 1, times.duration.length);

    return (
        <div className="places__info-container">
            <div className="places__info_title-container">
                <div className="places__info_title-icon">
                    <TrainIcon />
                </div>
                <div className="places__info_title-number_directions">
                    <span className="places__info_title-number">{number}</span>
                    <div className="places__info_title-directions">
                        {!startCity || <span className="places__info_title-start_city">{startCity}<ArrowInText /></span>}
                        <span className="places__info_title-from_city">{fromCity}<ArrowInText /></span>
                        <span className="places__info_title-to_city">{toCity}</span>
                    </div>
                </div>
            </div>
            <div className="places__info_times-container">
                <div className="places__info_times_direction-from">
                    <span className="places__info_times-time">{times.from}</span>
                    <span className="places__info_times-city">{fromCity}</span>
                    <span className="places__info_times-station">{fromStation}</span>
                </div>
                <div className="places__info_times_direction-container">
                    {(direction === "there") ? <ArrowThere /> : (direction === "back") ? <ArrowBack /> : null}
                </div>
                <div className="places__info_times_direction-to">
                    <span className="places__info_times-time">{times.to}</span>
                    <span className="places__info_times-city">{toCity}</span>
                    <span className="places__info_times-station">{toStation}</span>
                </div>
            </div>
            <div className="places__info_duration-container">
                <div className="places__info_duration-icon">
                    <Clock />
                </div>
                <div className="places__info_duration">
                    <span className="places__info_duration-text">{hour + " часов"}</span>
                    <span className="places__info_duration-text">{minutes + " минут"}</span>
                </div>
            </div>
        </div>
    )
}