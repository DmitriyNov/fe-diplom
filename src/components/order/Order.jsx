import { Outlet } from "react-router-dom";

export default function Order (props) {

    const { routesList, selectedRoute, trainSeats, tickets, setTickets, selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification, confirmOrder } = props;

    return (
        <div className="order">
                <Outlet context={[routesList, selectedRoute, trainSeats, tickets, setTickets, selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification, confirmOrder]} />
        </div>
    )
}