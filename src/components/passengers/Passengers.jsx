import Details from "../order/Details";
import Passenger from "./Passenger";
import Button from "../ui/Button";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Passengers () {
    
    const [ routesList, selectedRoute, trainSeats, tickets, setTickets, passengers, setPassengers, user, setUser, selectPlaces, backToTrains, selectPassengers, selectPayment] = useOutletContext();
    
    const [button, setButton] = useState({});

    const currentPassengers = [];
    const currentTickets = tickets;
    tickets.map((item, i) => {
        if (item.direction === "there") {
            currentPassengers.push(
                {
                    id: i + 1,
                    is_adult: (item.type === "adult"),
                    first_name: "",
                    last_name: "",
                    patronymic: "",
                    gender: true,
                    birthday: "",
                    document_type: "Паспорт РФ",
                    document_data: "",
                }
            );
            currentTickets[i].id = i + 1;
        } else {
            currentTickets[i].id = i - (tickets.length / 2) + 1;
        }
    });

    if (currentPassengers.length === 0) {
        tickets.map((item, i) => {
            if (item.direction === "back") {
                currentPassengers.push(
                    {
                        id: i + 1,
                        is_adult: (item.type === "adult"),
                        first_name: "",
                        last_name: "",
                        patronymic: "",
                        gender: "",
                        birthday: "",
                        document_type: "Паспорт РФ",
                        document_data: "",
                    }
                );
                currentTickets[i].id = i + 1;
            } else {
                currentTickets[i].id = i - (tickets.length / 2) + 1;
            }
        });
    }

    useEffect(() => {
        setPassengers(currentPassengers);
        setTickets(currentTickets);
        setButton({
            size: "button-medium",
            decor: "button-unactive",
            text: "ДАЛЕЕ",
            onClick: () => {},
        });
    }, []);

    function checkFormsCorrect () {
        let error = true;
        passengers.map((passenger) => {
            for (let key in passenger) {
                if (passenger[key] === "") {
                    error = false;
                }
            }
        });
        return error;
    }

    useEffect(() => {
        const checked = checkFormsCorrect();
        if (checked) {
            setButton({
                size: "button-medium",
                decor: "button-orange_white",
                text: "ДАЛЕЕ",
                onClick: () => {
                    selectPayment();
                },
            });
        } else {
            setButton({
                size: "button-medium",
                decor: "button-unactive",
                text: "ДАЛЕЕ",
                onClick: () => {},
            });
        }
    }, [passengers]);


    return (
        <div className="passengers">
            <div className="passengers__aside_widget-container">
                <Details props={{ selectedRoute: selectedRoute, tickets: tickets}}/>
            </div>
            <div className="passengers__content-container">
                {passengers.map((item, i) => (
                    <Passenger key={i} props={{...item, passengers: passengers, setPassengers: setPassengers}}/>
                ))}
                <div className="passengers-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}