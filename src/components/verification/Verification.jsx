import Details from "../order/Details";
import Train from "../tickets/Train";
import VerificationPassenger from "./VerificationPassenger";
import Button from "../ui/Button";
import { Ruble } from "../icons/Icons";
import { useOutletContext } from "react-router-dom";

export default function Verification () {
    
    const [selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification, confirmOrder] = useOutletContext();

    const train = {
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
    };

    const passengers = [
        {
            id: 1,
            is_adult: true,
            first_name: "Ирина",
            last_name: "Мартынюк",
            patronymic: "Эдуардовна",
            gender: false,
            birthday: "17.02.1985",
            document_type: "Паспорт РФ",
            document_data: "4204 380694",
        },
        {
            id: 2,
            is_adult: false,
            first_name: "Кирилл",
            last_name: "Мартынюк",
            patronymic: "Сергеевич",
            gender: true,
            birthday: "25.01.2006",
            document_type: "Свидетельство о рождении",
            document_data: "VIII УН 256319",
        },
        {
            id: 3,
            is_adult: true,
            first_name: "Сергей",
            last_name: "Мартынюк",
            patronymic: "Петрович",
            gender: true,
            birthday: "19.06.1982",
            document_type: "Паспорт РФ",
            document_data: "4204 380694",
        },
    ];

    const paymentType = "Наличными"
    const price = 7760;

    const button = {
        size: "button-large",
        decor: "button-orange_white",
        text: "Подтвердить",
        onClick: () => {
            confirmOrder();
        },
    };

    const buttonChange = {
        size: "button-small",
        decor: "button-simple_black",
        text: "Изменить",
        onClick: () => {
            console.log("change")
        },
    };

    return (
        <div className="verification">
            <div className="verification__aside_widget-container">
                <Details />
            </div>
            <div className="verification__content-container">
                <div className="verification__train-container">
                    <div className="verification__train-title">
                        Поезд
                    </div>
                    <div className="verification__train-content">
                        <Train props={train}/>
                    </div>
                </div>
                <div className="verification__passengers-container">
                    <div className="verification__passengers-title">
                        Пассажиры
                    </div>
                    <div className="verification__passengers-content">
                        <div className="verification__passengers-list">
                            {passengers.map((item, i) => (
                                <VerificationPassenger key={i} props={item}/>
                            ))}
                        </div>
                        <div className="verification__passenger-aside">
                            <div>
                                <span>
                                    Всего
                                </span>
                                <div>
                                    <span className="verification__passenger-price">
                                        {price}
                                    </span>
                                    <Ruble/>
                                </div>
                            </div>
                            <Button props={buttonChange} />
                        </div>
                    </div>
                </div>
                <div className="verification__payment-container">
                <div className="verification__payment-title">
                        Способ оплаты
                    </div>
                    <div className="verification__payment-content">
                        <span>
                            {paymentType}
                        </span>
                        <Button props={buttonChange} />
                    </div>
                </div>
                <div className="verification-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}