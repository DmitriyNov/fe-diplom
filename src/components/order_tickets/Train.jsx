import { WiFi, Express, Food, TrainIcon, ArrowInText } from "../icons/Icons";
import TrainDirection from "./TrainDirection";
import TrainPlace from "./TrainPlace";
import Button from "../ui/Button";

export default function Train ({props}) {

    const {number, startCity, fromCity, fromStation, toCity, toStation, options, times, places, selectPlaces} = props;

    const button = {
        size: "button-small",
        decor: "button-orange_white",
        text: "Выбрать места",
        onClick: () => {
            selectPlaces();
        },
    }

    return (
        <div className="train-container">
            <div className="train__title-container">
                <div className="train__title-icon_number">
                    <div className="train__title-icon">
                        <TrainIcon />
                    </div>
                    <span className="train__title-number">{number}</span>
                </div>
                <div className="train__title-directions">
                    {!startCity || <span className="train__title-start_city">{startCity}<ArrowInText /></span>}
                    <span className="train__title-from_city">{fromCity}<ArrowInText /></span>
                    <span className="train__title-to_city">{toCity}</span>
                </div>
            </div>
            <div className="train__times-container">
                <TrainDirection direction="there" fromCity={fromCity} fromStation={fromStation} toCity={toCity} toStation={toStation} times={times.there} />
                {!times.back || <TrainDirection direction="back" fromCity={fromCity} fromStation={fromStation} toCity={toCity} toStation={toStation} times={times.back} />}
            </div>
            <div className="train__places-container">
                <div className="train__places">
                    {places.map((item, i) => (
                        <TrainPlace key={i} props={item} />
                    ))}
                </div>
                <div className="train__places-options">
                    {options.map((item, i) => (
                        <div key={i} className="train__places-options-icon">
                            {(item === "wi-fi") ? <WiFi /> : (item === "express") ? <Express /> : (item === "food") ? <Food /> : null}
                        </div>
                    ))}
                </div>
                <Button props={button}/>
            </div>
        </div>
    )
}