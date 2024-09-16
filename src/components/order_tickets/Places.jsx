import PlacesDirection from "./PlacesDirection";

export default function Places () {
    //Пока не понял, как передать пропсы с данными о поезде с предыдущего рута
    const trains = [
        {
            direction: "there",
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: [],
            times: 
            {
                from: "00:10",
                to: "09:52",
                duration: "9:42",
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    places: [
                        {
                            price: 1920,
                        },
                    ],
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    places: [
                        {
                            type: "Верхние",
                            quantity: 36,
                            price: 2530,
                        },
                        {
                            type: "Нижние",
                            quantity: 16,
                            price: 2870,
                        },
                    ],
                },
                {
                    type: "Купе",
                    quantity: 24,
                    places: [
                        {
                            type: "Верхние",
                            quantity: 22,
                            price: 3820,
                        },
                        {
                            type: "Нижние",
                            quantity: 2,
                            price: 4230,
                        },
                    ],
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    places: [
                        {
                            price: 4950,
                        },
                    ],
                },
            ],
        },
        {
            direction: "back",
            number: "116С",
            startCity: "Адлер",
            fromCity: "Москва",
            fromStation: "Курский вокзал",
            toCity: "Санкт-Петербург",
            toStation: "Ладожский вокзал",
            options: [],
            times: {
                from: "00:10",
                to: "09:52",
                duration: "9:42",
            },
            places: [
                {
                    type: "Сидячий",
                    quantity: 88,
                    places: [
                        {
                            price: 1920,
                        },
                    ],
                },
                {
                    type: "Плацкарт",
                    quantity: 52,
                    places: [
                        {
                            type: "Верхние",
                            quantity: 36,
                            price: 2530,
                        },
                        {
                            type: "Нижние",
                            quantity: 16,
                            price: 2870,
                        },
                    ],
                },
                {
                    type: "Купе",
                    quantity: 24,
                    places: [
                        {
                            type: "Верхние",
                            quantity: 22,
                            price: 3820,
                        },
                        {
                            type: "Нижние",
                            quantity: 2,
                            price: 4230,
                        },
                    ],
                },
                {
                    type: "Люкс",
                    quantity: 15,
                    places: [
                        {
                            price: 4950,
                        },
                    ],
                },
            ],
        }
    ];

    return (
        <div className="places-container">
            <span className="places__title">ВЫБОР МЕСТ</span>
            {trains.map((item, i) => (
                <PlacesDirection key={i} props={item} />
            ))}
        </div>
    )
}