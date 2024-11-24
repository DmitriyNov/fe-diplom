import { Ruble } from "../icons/Icons";
import DetailsDirection from "./DetailsDirection";
import DetailsPassengers from "./DetailsPassengers";

export default function Details ({props}) {

    const {selectedRoute, tickets} = props;

    const details = [];

    selectedRoute.map((item) => {

        const from = new Date(item.from.datetime * 1000);
        const to = new Date(item.to.datetime * 1000);

        const times = {};
        const duration = ((String(Math.floor(item.duration / 3600)).length < 2) ? "0" : "") + Math.floor(item.duration / 3600) + ":" + ((String(Math.round((item.duration % 3600) / 60)).length < 2) ? "0" : "") + Math.round((item.duration % 3600) / 60);
        const timeFrom = ((String(from.getHours()).length < 2) ? "0" : "") + from.getHours() + ":" + ((String(from.getMinutes()).length < 2) ? "0" : "") + from.getMinutes();
        const timeTo = ((String(to.getHours()).length < 2) ? "0" : "") + to.getHours() + ":" + ((String(to.getMinutes()).length < 2) ? "0" : "") + to.getMinutes();
        times.duration = duration;
        times.from = timeFrom;
        times.to = timeTo;

        const date = {};
        const dateFrom = ((String(from.getDate()).length < 2) ? "0" : "") + from.getDate() + "." + ((String(from.getMonth()).length < 2) ? "0" : "") + (from.getMonth() + 1) + "." + from.getFullYear();
        const dateTo = ((String(to.getDate()).length < 2) ? "0" : "") + to.getDate() + "." + ((String(to.getMonth()).length < 2) ? "0" : "") + (to.getMonth() + 1) + "." + to.getFullYear();
        date.from = dateFrom;
        date.to = dateTo;

        details.push({
            direction: item.type,
            number: item.train.name,
            startCity: "", // Таких данных не нашёл
            fromCity: item.from.city.name,
            fromStation: item.from.railway_station_name,
            toCity: item.to.city.name,
            toStation: item.to.railway_station_name,
            times: times,
            date: date,
        })
    });

    const passengersInfo = [
        {
            type: "Взрослых",
            quantity: 0,
            price: 0,
        },
        {
            type: "Детей",
            quantity: 0,
            price: 0,
        },
    ];
    tickets.map((item) => {
        if (item.type === "adult") {
            passengersInfo[0].quantity = passengersInfo[0].quantity + 1;
            passengersInfo[0].price = passengersInfo[0].price + item.price;
        } else {
            passengersInfo[1].quantity = passengersInfo[1].quantity + 1;
            passengersInfo[1].price = passengersInfo[1].price + item.price;
        }
    });

    if (passengersInfo[0].quantity === 1) {
        passengersInfo[0].type = "Взрослый";
    } else if (passengersInfo[1].quantity === 1) {
        passengersInfo[1].type = "Ребёнок";
    }

    if (passengersInfo[0].quantity === 0) {
        passengersInfo.shift();
    } else if (passengersInfo[1].quantity === 0) {
        passengersInfo.pop();
    }

    return (
        <div className="details">
            <div className="details__title">
                <span>
                ДЕТАЛИ ПОЕЗДКИ
                </span>
            </div>
            {details.map((item, i) => (
                <DetailsDirection key={i} props={item} />
            ))}
            <DetailsPassengers props={passengersInfo}/>
            <div className="details__result">
                <span>
                    ИТОГ
                </span>
                <div>
                    <span className="details__result-price">
                        {passengersInfo.reduce((acc, item) => acc + item.price, 0)}
                    </span>
                    <Ruble/>
                </div>
            </div>
        </div>
    )
}