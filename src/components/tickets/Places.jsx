import PlacesDirection from "./PlacesDirection";
import Button from "../ui/Button";
import { useOutletContext } from "react-router-dom";

export default function Places () {
    //Пока не понял, как передать пропсы с данными о поезде с предыдущего рута
    const [routesList, selectedRoute, trainSeats, tickets, setTickets, selectPlaces, backToTrains, selectPassengers] = useOutletContext();

    const trains = [];

    selectedRoute.map((item) => {
        const options = [];
        if (item.have_wifi) {
            options.push("wi-fi");
        };
        if (item.is_express) {
            options.push("express");
        };
        if (item.have_air_conditioning) {
            options.push("conditioner"); // заменить иконку
        };

        const times = {};
        let duration = ((String(Math.floor(item.duration / 3600)).length < 2) ? "0" : "") + Math.floor(item.duration / 3600) + ":" + ((String(Math.round((item.duration % 3600) / 60)).length < 2) ? "0" : "") + Math.round((item.duration % 3600) / 60);
        let from = new Date(item.from.datetime * 1000);
        from = ((String(from.getHours()).length < 2) ? "0" : "") + from.getHours() + ":" + ((String(from.getMinutes()).length < 2) ? "0" : "") + from.getMinutes();
        let to = new Date(item.to.datetime * 1000);
        to = ((String(to.getHours()).length < 2) ? "0" : "") + to.getHours() + ":" + ((String(to.getMinutes()).length < 2) ? "0" : "") + to.getMinutes();
        times.duration = duration;
        times.from = from;
        times.to = to;

        trains.push({
            direction: item.type,
            number: item.train.name,
            startCity: "", // Таких данных не нашёл
            fromCity: item.from.city.name,
            fromStation: item.from.railway_station_name,
            toCity: item.to.city.name,
            toStation: item.to.railway_station_name,
            options: options,
            times: times,
        })
    })

    const carriages = [];
    trainSeats.map((train) => {
        const currentTrain = [];
        train.map((carriage) => {
            const places = [];
            if (carriage.coach.class_type === "fourth") {
                places.push({
                    quantity: carriage.coach.available_seats,
                    price: carriage.coach.bottom_price, // Вот почему у вагона сидячего класса есть верхние и нижние места? 
                });
            }
            if (carriage.coach.class_type === "third") {
                let topSeats = 0;
                let bottomSeats = 0;
                let sideSeats = 0;
                for (let i = 1; i <= carriage.seats.length; i++) {
                    if (i % 2 === 1 && i < 33) {
                        bottomSeats++; // Я решил, что нечётные будут нижними
                    } else if (i % 2 === 0 && i < 33) {
                        topSeats++;
                    } else {
                        sideSeats++;
                    }
                }

                places.push({
                    type: "Верхние",
                    quantity: topSeats,
                    price: carriage.coach.top_price, 
                });
                places.push({
                    type: "Нижние",
                    quantity: bottomSeats,
                    price: carriage.coach.bottom_price,
                });
                places.push({
                    type: "Боковые",
                    quantity: sideSeats,
                    price: carriage.coach.side_price, 
                });
            }
            if (carriage.coach.class_type === "second") {
                let topSeats = 0;
                let bottomSeats = 0;
                for (let i = 1; i <= carriage.seats.length; i++) {
                    if (i % 2 === 1) {
                        bottomSeats++; // Я решил, что нечётные будут нижними
                    } else {
                        topSeats++;
                    }
                }

                places.push({
                    type: "Верхние",
                    quantity: topSeats,
                    price: carriage.coach.top_price, 
                });
                places.push({
                    type: "Нижние",
                    quantity: bottomSeats,
                    price: carriage.coach.bottom_price,
                });
            }
            if (carriage.coach.class_type === "first") {
                places.push({
                    quantity: carriage.coach.available_seats,
                    price: carriage.coach.price, // Опять же, почему у вагона люкс класса есть верхние и нижние места? 
                });
            }

            const cariageName = carriage.coach.name.slice(-2).replace("-", "0");

            const currentSeats = [];
            carriage.seats.map((item) => {
                if (carriage.coach.class_type === "fourth") {
                    currentSeats.push({
                        ...item,
                        selected: false,
                        price: places[0].price, 
                    });
                }
                if (carriage.coach.class_type === "third") {
                    if (item.index % 2 === 1 && item.index < 33) {
                        currentSeats.push({
                            ...item,
                            selected: false,
                            price: places[1].price, 
                        });
                    } else if (item.index % 2 === 0 && item.index < 33) {
                        currentSeats.push({
                            ...item,
                            selected: false,
                            price: places[0].price, 
                        });
                    } else {
                        currentSeats.push({
                            ...item,
                            selected: false,
                            price: places[2].price, 
                        });
                    }
                }
                if (carriage.coach.class_type === "second") {
                    if (item.index % 2 === 1) {
                        currentSeats.push({
                            ...item,
                            selected: false,
                            price: places[1].price, 
                        });
                    } else {
                        currentSeats.push({
                            ...item,
                            selected: false,
                            price: places[0].price, 
                        });
                    }           
                }
                if (carriage.coach.class_type === "first") {
                    currentSeats.push({
                        ...item,
                        selected: false,
                        price: places[0].price, 
                    });
                }
            });

            const templateScheme = [];
            const scheme = [];
            if (carriage.coach.class_type === "fourth") {
                for (let i=1; i<63; i++) {
                    if (i <= currentSeats.length) {
                        templateScheme.push(currentSeats[i-1]);
                    } else {
                        templateScheme.push({
                            index: i,
                            available: false,
                        }); // Так как с сервера приходит меньшее количество мест, чем должно быть в вагоне, добиваю оставшиеся заглушками
                    } 
                };
                for (let i=0; i<62; i=i+4) {
                    if (i < 31 || i > 34 && i < 58) {
                        scheme.push(templateScheme.slice(i, i+4));  
                    } else if (i === 32) {
                        scheme.push(templateScheme.slice(i, i+3));
                        i = i - 1;
                    } else {
                        scheme.push(templateScheme.slice(i, i+3));
                        break;
                    }
                };
            } else if (carriage.coach.class_type === "third") {
                for (let i=1; i<49; i++) {
                    if (i <= currentSeats.length) {
                        templateScheme.push(currentSeats[i-1]);
                    } else {
                        templateScheme.push({
                            index: i,
                            available: false,
                        });
                    }
                };
                for (let i=0; i<48; i=i+4) {
                    if (i < 31) {
                        scheme.push(templateScheme.slice(i, i+4));  
                    } else {
                        scheme.push(templateScheme.slice(i, i+16));
                        break;
                    };
                };
            } else if (carriage.coach.class_type === "second") {
                for (let i=1; i<33; i++) {
                    if (i <= currentSeats.length) {
                        templateScheme.push(currentSeats[i-1]);
                    } else {
                        templateScheme.push({
                            index: i,
                            available: false,
                        });
                    }
                };
                for (let i=0; i<32; i=i+4) {
                    scheme.push(templateScheme.slice(i, i+4));
                }
            } else {
                for (let i=1; i<17; i++) {
                    if (i <= currentSeats.length) {
                        scheme.push(currentSeats[i-1]);
                    } else {
                        scheme.push({
                            index: i,
                            available: false,
                        });
                    }
                };
            }

            const currentCariage = {
                name: cariageName,
                type: (carriage.coach.class_type === "fourth") ? "Сидячий" : (carriage.coach.class_type === "third") ? "Плацкарт" : (carriage.coach.class_type === "second") ? "Купе" : "Люкс",
                quantity: carriage.coach.available_seats,
                places: places,
                seats: scheme,
            };
            currentTrain.push(currentCariage);
        });
        carriages.push(currentTrain);
    });

    const routeInfo = [];

    for (let i = 0; i < 2; i++) {
        if (trains[i] && carriages[i]) {
            routeInfo.push({
                train: trains[i],
                carriages: carriages[i],
            });
        }
    }

    const button = {
        size: "button-medium",
        decor: "button-orange_white",
        text: "ДАЛЕЕ",
        onClick: () => {
            selectPassengers();
        },
    };

    return (
        <div className="places-container">
            <span className="places__title">ВЫБОР МЕСТ</span>
            {routeInfo.map((item, i) => (
                <PlacesDirection key={i} train={item.train} carriages={item.carriages} tickets={tickets} setTickets={setTickets} backToTrains={backToTrains} />
            ))}
            <div className="places-button">
                <Button props={button} />
            </div>
        </div>
    )
}