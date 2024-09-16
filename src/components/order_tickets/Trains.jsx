import TrainSort from "./TrainSort";
import TrainShow from "./TrainShow";
import Train from "./Train";
import TrainsSlider from "./TrainsSlider";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Trains () {

    const [selectPlaces] = useOutletContext();

    const [show, setShow] = useState(5);

    const trains = [
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
                back: {
                    from: "00:10",
                    to: "09:52",
                    duration: "9:42",
                },
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    price: 1920,
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
        {
            number: "20У",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Московский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:20",
                    to: "08:59",
                    duration: "8:39",
                },
            },
            places: [
                {
                    type: "Купе",
                    quantity: 90,
                    price: 3950,
                },
                {
                    type: "Люкс",
                    quantity: 31,
                    price: 4950,
                },
            ],
        },
        {
            number: "131Г",
            startCity: "Нижний Новгород",
            fromCity: "Москва",
            fromStation: "Ленинградский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: ["wi-fi", "express", "food"],
            times: {
                there: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
                back: {
                    from: "00:41",
                    to: "09:13",
                    duration: "8:32",
                },
            },
            places: [
                {
                    type: "Плацкарт",
                    quantity: 52,
                    price: 2530,
                },
                {
                    type: "Купе",
                    quantity: 24,
                    price: 3820,
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    price: 4950,
                },
            ],
        },
    ];

    const quantity = trains.length;

    const [showTrain, setShowTrain] = useState(trains.slice(0, show));

    function selectShow (event) {
        const currentshow = event.target.innerText;
        setShow(currentshow);
        setShowTrain(trains.slice(0, currentshow));
    }

    return (
        <div className="trains-container">
            <div className="trains__sorting-container">
                <div className="trains__found-container">
                    <span>найдено </span><span className="trains__found">{quantity}</span>
                </div>
                <div className="trains__sort_show-container">
                    <div className="trains__sort-container">
                        <span>сортировать по: </span>
                        <TrainSort />
                    </div>
                    <div className="trains__show-container">
                        <span>показывать по: </span>
                        <TrainShow selectShow={selectShow}/>
                    </div>
                </div>
            </div>
            <div className="trains__items-container">
                {showTrain.map((item, i) => (
                    <Train key={i} props={{...item, selectPlaces: selectPlaces}} />
                ))}
            </div>
            <div className="trains__slider-container">
                <TrainsSlider quantity={quantity} show={show}/>
            </div>
        </div>
    )
}