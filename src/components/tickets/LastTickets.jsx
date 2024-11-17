import LastTicket from "./LastTicket";
import { lastRoutes } from "../../api/appAPI";
import { useEffect, useState } from "react";

export default function LastTickets () {
    
    let [lastTickets, setLastTickets] = useState([]);

    useEffect(() => {
        lastRoutes((response) => {
            setLastTickets(response);
        });
    }, []);
    
    return (
        <div className="last-tickets-container">
            <span className="last-tickets__title">ПОСЛЕДНИЕ БИЛЕТЫ</span>
            <div className="last-tickets__items-container">
                {lastTickets.map((item, i) => (
                    <LastTicket key={i} ticket={item} />
                ))}
            </div>
        </div>
    )
}