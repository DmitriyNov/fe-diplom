import { Outlet } from "react-router-dom";

export default function Order (props) {
    
    const { selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification } = props;

    return (
        <div className="order">
                <Outlet context={[selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification]} />
        </div>
    )
}