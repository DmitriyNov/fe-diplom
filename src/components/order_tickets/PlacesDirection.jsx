import { There, Back } from "../icons/Icons";
import { useOutletContext } from "react-router-dom";
import Button from "../ui/Button";
import PlacesInfo from "./PlacesInfo";
import PlacesTickets from "./PlacesTickets";

export default function PlacesDirection ({props}) {

    const {direction, number, startCity, fromCity, fromStation, toCity, toStation, options, times, places} = props;
    const [backToTrains] = useOutletContext();
    const train = 
    {
        direction: direction,
        number: number,
        startCity: startCity,
        fromCity: fromCity,
        fromStation: fromStation,
        toCity: toCity,
        toStation: toStation,
        times: times,
    };
    const tickets = {places: places, options: options};
    const button = {
        size: "button-large",
        decor: "button-simple_black",
        text: "Выбрать другой поезд",
        onClick: () => {
            backToTrains();
        },
    }

    return (
        <div className="places__direction">
            <div className={"places__direction_title-" + direction}>
                {(direction === "there") ? <There /> : <Back />}
                <Button props={button} />
            </div>
            <PlacesInfo props={train}/>
            <PlacesTickets props={tickets}/>
        </div>
    )
}