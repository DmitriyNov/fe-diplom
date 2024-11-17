import { There, Back } from "../icons/Icons";
import { useOutletContext } from "react-router-dom";
import Button from "../ui/Button";
import PlacesInfo from "./PlacesInfo";
import PlacesTickets from "./PlacesTickets";

export default function PlacesDirection (props) {

    const {train, carriages, tickets, setTickets, backToTrains} = props;

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
            <div className={"places__direction_title-" + train.direction}>
                {(train.direction === "there") ? <There /> : <Back />}
                <Button props={button} />
            </div>
            <PlacesInfo props={train}/>
            <PlacesTickets train={train} carriages={carriages} tickets={tickets} setTickets={setTickets}/>
        </div>
    )
}