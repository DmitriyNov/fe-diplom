import LastTicket from "./LastTicket";

export default function LastTickets () {

    const tickets = [
        {
            fromCity: "Санкт-Петербург",
            fromStation: "Курский вокзал",
            toCity: "Самара",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            price: 2500,
        },
        {
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Казань",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            price: 3500,
        },
        {
            fromCity: "Казань",
            fromStation: "Курский вокзал",
            toCity: "Нижний новгород",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            price: 3800,
        }
    ];

    return (
        <div className="last-tickets-container">
            <span className="last-tickets__title">ПОСЛЕДНИЕ БИЛЕТЫ</span>
            <div className="last-tickets__items-container">
                {tickets.map((item, i) => (
                    <LastTicket key={i} props={item} />
                ))}
            </div>
        </div>
    )
}