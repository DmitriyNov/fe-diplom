import { useState } from "react";
import { There, Back, ArrowThere, ArrowBack, Collapse, Disclose } from "../icons/Icons";

export default function DetailsDirection ({props}) {

    const {direction, number, startCity, fromCity, fromStation, toCity, toStation, times, date}  = props;
    
    const [visibility, setVisibility] = useState(true);

    function collapse () {
        if (visibility) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }

    let dateFrom = date.from.split("-");
    let dateTo = date.to.split("-");
    dateFrom = dateFrom[2].concat(".", dateFrom[1], ".", dateFrom[0]);
    dateTo = dateTo[2].concat(".", dateTo[1], ".", dateTo[0]);

    return (
        <div className="details__direction">
            <div className="details__direction_title-container">
                <div className="details__direction_icon_title-container">
                    <div className="details__direction-icon">
                        {direction === "there" ? <There/> : <Back />}
                    </div>
                    <span className="details__direction-title">
                        {direction === "there" ? "Туда" : "Обратно"}
                    </span>
                    <span className="details__direction-date">
                        {dateFrom}
                    </span>
                </div>
                <div className="details__direction-collapse" onClick={collapse} >
                    {visibility ? <Collapse /> : <Disclose />}
                </div>
            </div>
            {!visibility || 
            <div className="details__direction-info">
                <div className="details__direction_info-container">
                    <span className="details__direction_info-text">
                        № Поезда
                    </span>
                    <span className="details__direction_info-text-number">
                        {number}
                    </span>
                </div>
                <div className="details__direction_info-container">
                    <span className="details__direction_info-text">
                        Название
                    </span>
                    <div className="details__direction_info-cities_container">
                        <span className="details__direction_info-text_cities">
                            {startCity || fromCity}
                        </span>
                        <span className="details__direction_info-text_cities">
                            {toCity}
                        </span>
                    </div>
                </div>
                <div className="details__direction_info-duration">
                    <span>{times.duration}</span>
                </div>
                <div className="details__direction_info-container">
                    <div className="details__direction_info-time_container">
                        <span className="details__direction_info-time">
                            {direction === "there" ? times.from : times.to}
                        </span>
                        <span className="details__direction_info-date">
                            {direction === "there" ? dateFrom : dateTo}
                        </span>
                    </div>
                    <div className="details__direction_info-direction">
                        {direction === "there" ? <ArrowThere/> : <ArrowBack />}
                    </div>
                    <div className="details__direction_info-time_container">
                        <span className="details__direction_info-time">
                            {direction === "there" ? times.to : times.from}
                        </span>
                        <span className="details__direction_info-date">
                            {direction === "there" ? dateTo : dateFrom}
                        </span>
                    </div>
                </div>
                <div className="details__direction_info-container">
                    <div className="details__direction_info-city_container">
                        <span className="details__direction_info-city">
                            {fromCity}
                        </span>
                        <span>
                            {fromStation}
                        </span>
                    </div>
                    <div className="details__direction_info-city_container">
                        <span className="details__direction_info-city">
                            {toCity}
                        </span>
                        <span className="details__direction_info-station-special">
                            {toStation}
                        </span>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}