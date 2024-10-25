import { WiFi, Express, Food, Ruble } from "../icons/Icons";

export default function LastTicket ({props}) {

    const {fromCity, fromStation, toCity, toStation, options, price} = props;

    return (
        <div className="last_ticket-container">
            <div className="last_ticket__directions-container">
                <div className="last_ticket__directions-from">
                    <span className="last_ticket__directions-from_city">{fromCity}</span>
                    <span className="last_ticket__directions-from_station">{fromStation}</span>
                </div>
                <div className="last_ticket__directions-to">
                    <span className="last_ticket__directions-to_city">{toCity}</span>
                    <span className="last_ticket__directions-to_station">{toStation}</span>
                </div>
            </div>
            <div className="last_ticket__info-container">
                <div className="last_ticket__info_options">
                    {options.map((item, i) => (
                        <div key={i} className="last-ticket__info_options-icon">
                            {(item === "wi-fi") ? <WiFi /> : (item === "express") ? <Express /> : (item === "food") ? <Food /> : null}
                        </div>
                    ))}
                </div>
                <div className="last_ticket__info_price-container">
                    <span>от</span>
                    <span className="last_ticket__info_price">{price}</span>
                    <Ruble />
                </div>
            </div>
        </div>
    )
}