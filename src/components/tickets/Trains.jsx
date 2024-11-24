import TrainSort from "./TrainSort";
import TrainShow from "./TrainShow";
import Train from "./Train";
import TrainsSlider from "./TrainsSlider";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Trains () {

    const [routesList, selectedRoute, trainSeats, tickets, setTickets, selectPlaces] = useOutletContext();

    const [show, setShow] = useState(5);

    const trains = routesList.items;

    function selectShow (event) {
        const currentshow = event.target.innerText;
        setShow(currentshow);
        // setShowTrain(trains.slice(0, currentshow));
    }

    return (
        <div className="trains-container">
            <div className="trains__sorting-container">
                <div className="trains__found-container">
                    <span>найдено </span><span className="trains__found">{routesList.total_count || 0}</span>
                </div>
                <div className="trains__sort_show-container">
                    <div className="trains__sort-container">
                        <span>сортировать по: </span>
                        <TrainSort />
                    </div>
                    <div className="trains__show-container">
                        <span>показывать по: </span>
                        <TrainShow selectShow={selectShow}/>
                    </div>
                </div>
            </div>
            <div className="trains__items-container">
                {(!trains) || trains.map((item, i) => (
                    <Train key={i} trainData={item} selectPlaces={selectPlaces}/>
                ))}
            </div>
            <div className="trains__slider-container">
                <TrainsSlider quantity={show} show={show}/>
            </div>
        </div>
    )
}