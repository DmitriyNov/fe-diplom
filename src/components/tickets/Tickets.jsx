import Filter from "./Filter";
import LastTickets from "./LastTickets";
import { Outlet, useOutletContext } from 'react-router-dom';

export default function Tickets () {

    const [routesList, selectSeats, trainSeats, tickets, setTickets, selectPlaces, backToTrains, selectPassengers] = useOutletContext();


    return (
        <div className="tickets">
            <div className="tickets__aside_widget-container">
                <Filter />
                <LastTickets />
            </div>
            <div className="tickets__content-container">
                <Outlet context={[routesList, selectSeats, trainSeats, tickets, setTickets, selectPlaces, backToTrains, selectPassengers]}/>
            </div>
        </div>
    )
}