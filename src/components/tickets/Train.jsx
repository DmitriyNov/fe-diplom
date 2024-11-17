import { WiFi, Express, Food, TrainIcon, ArrowInText } from "../icons/Icons";
import TrainDirection from "./TrainDirection";
import TrainPlace from "./TrainPlace";
import Button from "../ui/Button";

export default function Train (props) {

    const {trainData, selectPlaces} = props;

    const number = trainData.departure.train.name;
    const startCity = ""; // не нашёл такой информации
    const fromCity = trainData.departure.from.city.name;
    const fromStation = trainData.departure.from.railway_station_name;
    const toCity = trainData.departure.to.city.name;
    const toStation = trainData.departure.to.railway_station_name;

    const options = [];
    if (trainData.have_wifi) {
        options.push("wi-fi");
    };
    if (trainData.is_express) {
        options.push("express");
    };
    if (trainData.have_air_conditioning) {
        options.push("food"); // заменить иконку
    };

    const times = {there: {}, back: {}};
    if (trainData.arrival) {
        let duration = ((String(Math.floor(trainData.arrival.duration / 3600)).length < 2) ? "0" : "") + Math.floor(trainData.arrival.duration / 3600) + ":" + ((String(Math.round((trainData.departure.duration % 3600) / 60)).length < 2) ? "0" : "") + Math.round((trainData.departure.duration % 3600) / 60);
        let from = new Date(trainData.arrival.from.datetime * 1000);
        from = ((String(from.getHours()).length < 2) ? "0" : "") + from.getHours() + ":" + ((String(from.getMinutes()).length < 2) ? "0" : "") + from.getMinutes();
        let to = new Date(trainData.arrival.to.datetime * 1000);
        to = ((String(to.getHours()).length < 2) ? "0" : "") + to.getHours() + ":" + ((String(to.getMinutes()).length < 2) ? "0" : "") + to.getMinutes();

        times.there.duration = duration;
        times.there.from = from;
        times.there.to = to;
    }
    if (trainData.departure) {
        let duration = ((String(Math.floor(trainData.departure.duration / 3600)).length < 2) ? "0" : "") + Math.floor(trainData.departure.duration / 3600) + ":" + ((String(Math.round((trainData.departure.duration % 3600) / 60)).length < 2) ? "0" : "") + Math.round((trainData.departure.duration % 3600) / 60);
        let from = new Date(trainData.departure.from.datetime * 1000);
        from = ((String(from.getHours()).length < 2) ? "0" : "") + from.getHours() + ":" + ((String(from.getMinutes()).length < 2) ? "0" : "") + from.getMinutes();
        let to = new Date(trainData.departure.to.datetime * 1000);
        to = ((String(to.getHours()).length < 2) ? "0" : "") + to.getHours() + ":" + ((String(to.getMinutes()).length < 2) ? "0" : "") + to.getMinutes();

        times.back.duration = duration;
        times.back.from = from;
        times.back.to = to;
    }

    const places = []; // код ниже конечно лучше отрефакторить
    if (trainData.available_seats_info.fourth > 0) {
        let lowestPriceArrival = 0;
        if (trainData.arrival.price_info) {
            for (let price in trainData.arrival.price_info.fourth) {
                if (trainData.arrival.price_info.fourth[price] < lowestPriceArrival || lowestPriceArrival === 0) {
                    lowestPriceArrival = trainData.arrival.price_info.fourth[price];
                }
            }
        } 
        let lowestPriceDeparture = 0;
        if (trainData.departure.price_info) {
            for (let price in trainData.departure.price_info.fourth) {
                if (trainData.departure.price_info.fourth[price] < lowestPriceDeparture || lowestPriceDeparture === 0) {
                    lowestPriceDeparture = trainData.departure.price_info.fourth[price];
                }
            }
        }
        let lowestPrice = 0;
        if (lowestPriceArrival < lowestPriceDeparture && lowestPriceArrival !== 0 || lowestPriceDeparture === 0) {
            lowestPrice = lowestPriceArrival;
        } else {
            lowestPrice = lowestPriceDeparture;
        }
        places.push({
            type: "Сидячий",
            quantity: trainData.available_seats_info.fourth,
            price: lowestPrice,
        });
    };
    if (trainData.available_seats_info.third > 0) {
        let lowestPriceArrival = 0;
        if (trainData.arrival.price_info) {
            for (let price in trainData.arrival.price_info.third) {
                if (trainData.arrival.price_info.third[price] < lowestPriceArrival || lowestPriceArrival === 0) {
                    lowestPriceArrival = trainData.arrival.price_info.third[price];
                }
            }
        } 
        let lowestPriceDeparture = 0;
        if (trainData.departure.price_info) {
            for (let price in trainData.departure.price_info.third) {
                if (trainData.departure.price_info.third[price] < lowestPriceDeparture || lowestPriceDeparture === 0) {
                    lowestPriceDeparture = trainData.departure.price_info.third[price];
                }
            }
        }
        let lowestPrice = 0;
        if (lowestPriceArrival < lowestPriceDeparture && lowestPriceArrival !== 0 || lowestPriceDeparture === 0) {
            lowestPrice = lowestPriceArrival;
        } else {
            lowestPrice = lowestPriceDeparture;
        }
        places.push({
            type: "Плацкарт",
            quantity: trainData.available_seats_info.third,
            price: lowestPrice,
        });
    };
    if (trainData.available_seats_info.second > 0) {
        let lowestPriceArrival = 0;
        if (trainData.arrival.price_info) {
            for (let price in trainData.arrival.price_info.second) {
                if (trainData.arrival.price_info.second[price] < lowestPriceArrival || lowestPriceArrival === 0) {
                    lowestPriceArrival = trainData.arrival.price_info.second[price];
                }
            }
        } 
        let lowestPriceDeparture = 0;
        if (trainData.departure.price_info) {
            for (let price in trainData.departure.price_info.second) {
                if (trainData.departure.price_info.second[price] < lowestPriceDeparture || lowestPriceDeparture === 0) {
                    lowestPriceDeparture = trainData.departure.price_info.second[price];
                }
            }
        }
        let lowestPrice = 0;
        if (lowestPriceArrival < lowestPriceDeparture && lowestPriceArrival !== 0 || lowestPriceDeparture === 0) {
            lowestPrice = lowestPriceArrival;
        } else {
            lowestPrice = lowestPriceDeparture;
        }
        places.push({
            type: "Купе",
            quantity: trainData.available_seats_info.second,
            price: lowestPrice,
        });
    };
    if (trainData.available_seats_info.first > 0) {
        let lowestPriceArrival = 0;
        if (trainData.arrival.price_info) {
            for (let price in trainData.arrival.price_info.first) {
                if (trainData.arrival.price_info.first[price] < lowestPriceArrival || lowestPriceArrival === 0) {
                    lowestPriceArrival = trainData.arrival.price_info.first[price];
                }
            }
        } 
        let lowestPriceDeparture = 0;
        if (trainData.departure.price_info) {
            for (let price in trainData.departure.price_info.first) {
                if (trainData.departure.price_info.first[price] < lowestPriceDeparture || lowestPriceDeparture === 0) {
                    lowestPriceDeparture = trainData.departure.price_info.first[price];
                }
            }
        }
        let lowestPrice = 0;
        if (lowestPriceArrival < lowestPriceDeparture && lowestPriceArrival !== 0 || lowestPriceDeparture === 0) {
            lowestPrice = lowestPriceArrival;
        } else {
            lowestPrice = lowestPriceDeparture;
        }
        places.push({
            type: "Люкс",
            quantity: trainData.available_seats_info.first,
            price: lowestPrice,
        });
    };
    

    const button = {
        size: "button-small",
        decor: "button-orange_white",
        text: "Выбрать места",
        onClick: () => {
            let id = [];
            let routeData = [];
            if (trainData.arrival._id) {
                id.push(trainData.arrival._id);
                trainData.arrival.type = "there";
                routeData.push(trainData.arrival);
            }
            if (trainData.departure._id) {
                id.push(trainData.departure._id);
                trainData.departure.type = "back";
                routeData.push(trainData.departure);
            }
            selectPlaces(id, routeData);
        },
    }

    return (
        <div className="train-container">
            <div className="train__title-container">
                <div className="train__title-icon_number">
                    <div className="train__title-icon">
                        <TrainIcon />
                    </div>
                    <span className="train__title-number">{number}</span>
                </div>
                <div className="train__title-directions">
                    {!startCity || <span className="train__title-start_city">{startCity}<ArrowInText /></span>}
                    <span className="train__title-from_city">{fromCity}<ArrowInText /></span>
                    <span className="train__title-to_city">{toCity}</span>
                </div>
            </div>
            <div className="train__times-container">
                {!times.there.duration || <TrainDirection direction="there" fromCity={fromCity} fromStation={fromStation} toCity={toCity} toStation={toStation} times={times.there} />}
                {!times.back.duration || <TrainDirection direction="back" fromCity={fromCity} fromStation={fromStation} toCity={toCity} toStation={toStation} times={times.back} />}
            </div>
            <div className="train__places-container">
                <div className="train__places">
                    {places.map((item, i) => (
                        <TrainPlace key={i} props={item} />
                    ))}
                </div>
                <div className="train__places-options">
                    {options.map((item, i) => (
                        <div key={i} className="train__places-options-icon">
                            {(item === "wi-fi") ? <WiFi /> : (item === "express") ? <Express /> : (item === "food") ? <Food /> : null}
                        </div>
                    ))}
                </div>
                <Button props={button}/>
            </div>
        </div>
    )
}