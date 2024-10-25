import { Ruble } from "../icons/Icons";
import DetailsDirection from "./DetailsDirection";
import DetailsPassengers from "./DetailsPassengers";

export default function Details () {

    const details = [
        {
            direction: "there",
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            times: 
            {
                from: "00:10",
                to: "09:52",
                duration: "9:42",
            },
            date: {
                from: "2018-08-30",
                to: "2018-08-31",
            },
        },
        {
            direction: "back",
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            times: 
            {
                from: "09:52",
                to: "00:10",
                duration: "9:42",
            },
            date: {
                from: "2018-09-08",
                to: "2018-09-09",
            },
        },
    ];

    const passengers = [
        {
            type: "Взрослых",
            quantity: 2,
            price: 5840,
        },
        {
            type: "Ребёнок",
            quantity: 1,
            price: 1920,
        },
    ]

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
            <DetailsPassengers props={passengers}/>
            <div className="details__result">
                <span>
                    ИТОГ
                </span>
                <div>
                    <span className="details__result-price">
                        {passengers.reduce((acc, item) => acc + item.price, 0)}
                    </span>
                    <Ruble/>
                </div>
            </div>
        </div>
    )
}