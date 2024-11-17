import { useState } from "react";
import { Ruble, ConditionerOption, WiFiOption, LinenOption, FoodOption } from "../icons/Icons";

export default function PlacesCarriage ({props}) {

    const {name, type, quantity, places, options, seats, activeCarriages, setActiveCarriages, tickets, setTickets} = props;

    const [price, setPrice] = useState(0);

    let availableOptions = [
        {
            name: "conditioner",
        },
        {
            name: "wi-fi",
        },
        {
            name: "linen",
        },
        {
            name: "food",
        },
    ];

    const buyersNumber = 19;
    const service = "ФПК";

    let image = "";
    if (type === "Сидячий") {
        image = "Seating";
    } else if (type === "Плацкарт") {
        image = "Reserved";
    } else if (type === "Купе") {
        image = "Compartment";
    } else {
        image = "Lux";
    }

    for (let i = 0; i < availableOptions.length; i++) {
        if (options.includes(availableOptions[i].name)) {
            availableOptions[i].status = "included";
        }
    }

    function selectSeats (event) {
        if (type !== "Люкс") {
            seats.map((items) => {
                items.map((item) => {
                    if (item.index === +event.currentTarget.id && !item.selected && item.available) {
                        item.selected = true;
                        setPrice(price + item.price);
                        tickets.push({
                            carriageName: name,
                            type: "", //Добавить тип билета взрослый/детский
                            seats: item.index,
                            price: item.price,
                        });
                        console.log(tickets);
                        setTickets(tickets);
                    } else if (item.index === +event.currentTarget.id && item.selected) {
                        item.selected = false;
                        setPrice(price - item.price);
                        const currentTickets = tickets.filter((ticket) => !(ticket.seats === item.index && ticket.carriageName === name));
                        setTickets([...currentTickets]);
                        console.log(currentTickets);
                    }
                });
            });
        } else {
            seats.map((item) => {
                if (item.index === +event.currentTarget.id && !item.selected && item.available) {
                    item.selected = true;
                    setPrice(price + item.price);
                    tickets.push({
                        carriageName: name,
                        type: "", //Добавить тип билета взрослый/детский
                        seats: item.index,
                        price: item.price,
                    });
                    console.log(tickets);
                    setTickets(tickets);
                } else if (item.index === +event.currentTarget.id && item.selected) {
                    item.selected = false;
                    setPrice(price - item.price);
                    const currentTickets = tickets.filter((ticket) => !(ticket.seats === item.index && ticket.carriageName === name));
                    setTickets([...currentTickets]);
                    console.log(currentTickets);
                }
            });
        }
        
        activeCarriages.map((item, i) => {
            if (item.name === name) {
                activeCarriages[i].seats = seats;
            }
        })
        setActiveCarriages([...activeCarriages]);
    }

    return (
        <div className="places__tickets-carriage">
            <div className="places__tickets_carriage-data">
                <div className="places__tickets_carriage_data_number-container">
                    <span className="places__tickets_carriage_data-number">{name}</span>
                    <span>вагон</span>
                </div>
                <div className="places__tickets_carriage_data_places-container">
                    <div className="places__tickets_carriage_data_places-text">
                        <div>
                            <span>Места</span>
                            <span className="places__tickets_carriage_data_places-quantity">{quantity}</span>
                        </div>
                        <span>Стоимость</span>
                    </div>
                    {places.map((item, i) => (
                        <div key ={i} className="places__tickets_carriage_data_place-container">
                            <div className="places__tickets_carriage_data_place_type-quantity-container">
                                <span className="places__tickets_carriage_data_place-type">{item.type}</span>
                                <span className="places__tickets_carriage_data_place-quantity">{item.quantity}</span>
                            </div>
                            <div className="places__tickets_carriage_data_place_price-container">
                                <span className="places__tickets_carriage_data_place_price">{item.price}</span>
                                <Ruble />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="places__tickets_carriage_data_options-container">
                    <div>
                        <span>Обслуживание</span>
                        <span className="places__tickets_carriage_data_options-serviced">{service}</span>
                    </div>
                    <div className="places__tickets_carriage_data_options">
                        {availableOptions.map((item, i) => (
                            <div key={i} className={"places__tickets_carriage_data_option " + ((item.status === "included") ? "places__tickets_carriage_data_option-included" : "")}>
                                {(item.name === "conditioner") ? <ConditionerOption /> : (item.name === "wi-fi") ? <WiFiOption /> : (item.name === "linen") ? <LinenOption /> : <FoodOption />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="places__tickets_carriage-info">
                <span>{buyersNumber}</span>
                <span> человек выбирают места в этом поезде</span>
            </div>
            <div className="places__tickets_carriage_scheme-container">
                <img className="places__tickets_carriage_scheme-image" src={"/images/" + image + ".png"}/>
                <div className={"places__tickets_carriage-scheme places__tickets_carriage-scheme-" + image}>
                    {seats.map((items, i) => (
                        (type === "Сидячий") ?
                        <div key={i} className={"places__tickets_carriage_scheme_items-container" + " " + ((i === 8) ? "places__tickets_carriage_scheme_items-container-right places__tickets_carriage_scheme_items-container-special" : (i >= 8) ? "places__tickets_carriage_scheme_items-container-right" : "")}>
                            {items.map((item) => (
                                <div key={item.index} id={item.index} className={"places__tickets_carriage_scheme-item " + ((!item.available) ? "places__tickets_carriage_scheme-item-unavailable " : "") + ((item.selected) ? "places__tickets_carriage_scheme-item-selected" : "") } onClick={selectSeats}>
                                    {item.index}
                                </div>
                            ))}
                        </div> : 
                        (type === "Плацкарт") ?
                        <div key={i} className={"places__tickets_carriage_scheme_items-container" + " " + ((i === 8) ? "places__tickets_carriage_scheme_items-container-aside" : "")}>
                            {items.map((item) => (
                                <div key={item.index} id={item.index} className={"places__tickets_carriage_scheme-item " + ((i === 8 && !(item.index % 2)) ? "places__tickets_carriage_scheme-item-Reserved_even " : "") + ((!item.available) ? "places__tickets_carriage_scheme-item-unavailable " : "") + ((item.selected) ? "places__tickets_carriage_scheme-item-selected" : "")} onClick={selectSeats}>
                                    {item.index}
                                </div>
                            ))}
                        </div> : 
                        (type === "Купе") ?
                        <div key={i} className="places__tickets_carriage_scheme_items-container">
                            {items.map((item) => (
                                <div key={item.index} id={item.index} className={"places__tickets_carriage_scheme-item " + ((!item.available) ? "places__tickets_carriage_scheme-item-unavailable " : "") + ((item.selected) ? "places__tickets_carriage_scheme-item-selected" : "")} onClick={selectSeats}>
                                    {item.index}
                                </div>
                            ))}
                        </div> : 
                        <div key={i} id={items.index} className={"places__tickets_carriage_scheme-item " + (!(items.index % 2) ? "places__tickets_carriage_scheme-item-Lux_even " : "")  + ((!items.available) ? "places__tickets_carriage_scheme-item-unavailable " : "") + ((items.selected) ? "places__tickets_carriage_scheme-item-selected" : "")} onClick={selectSeats}>
                            {items.index}
                        </div>
                    ))}
                </div>
            </div>
            {price === 0 || <div>
                <div className="places__tickets_carriage_price-container">
                    <span className="places__tickets_carriage_price">{price}</span>
                    <Ruble />
                </div>
            </div>}
        </div>
    )
}