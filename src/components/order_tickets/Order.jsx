import Filter from "./Filter";
import LastTickets from "./LastTickets";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Order () {
    
    const navigation = useNavigate();

    useEffect(() => {
      navigation("/order/train");   
    }, []);

    function selectPlaces () {
        navigation("/order/places");
    }

    function backToTrains () {
        navigation("/order/train");
    }

    return (
        <div className="order">
            <div className="order__aside_widget-container">
                <Filter />
                <LastTickets />
            </div>
            <div className="order__content-container">
                <Outlet context={[selectPlaces, backToTrains]}/>
            </div>
        </div>
    )
}