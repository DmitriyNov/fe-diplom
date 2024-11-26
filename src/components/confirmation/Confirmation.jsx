import { Ruble, Star } from "../icons/Icons";
import Instruction from "./Instruction";
import Button from "../ui/Button";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Confirmation () {

    const [ searchData, setSearchData, routesList, setRoutesList, orderData ] = useOutletContext();

    const orderNumber = "285AA"; // Было бы круто, если бы номер заказа приходил с сервера в слчае успешного совершения заказа
    const orderAmount = orderData.price;
    const userName = orderData.user.first_name + " " + orderData.user.patronymic;

    const instructions = [
        {
            icon: "./icons/E-mail.svg",
            text: "билеты будут отправлены на ваш e-mail",
        },
        {
            icon: "./icons/Tickets.svg",
            text: "распечатайте и сохраняйте билеты до даты поездки",
        },
        {
            icon: "./icons/Boarding.svg",
            text: "предьявите распечатанные билеты при посадке",
        },
    ];

    const [stars, setStars] = useState(
        [
            {
                index: 1,
                status: "active",
            },
            {
                index: 2,
                status: "active",
            },
            {
                index: 3,
                status: "active",
            },
            {
                index: 4,
                status: "active",
            },
            {
                index: 5,
                status: "",
            }
        ]);

    // function rateUs (event) {

    // };

    const button = {
        size: "button-large",
        decor: "button-simple_black",
        text: "ВЕРНУТЬСЯ НА ГЛАВНУЮ",
        onClick: () => {
            console.log("back")
        },
    };

    return (
        <div className="confirmation__page-container">
            <div className="confirmation__header_background"></div>
            <div className="confirmation-container">
                <span className="confirmation__title-text">
                    Благодарим Вас за заказ!
                </span>
                <div className="confirmation">
                    <div className="confirmation__title">
                        <span>
                            {"№Заказа " + orderNumber}
                        </span>
                        <div className="confirmation__title-amount">
                            <span>
                                сумма
                            </span>
                            <div>
                                <span className="confirmation__title-price">
                                    {orderAmount}
                                </span>
                                <Ruble/>
                            </div>
                        </div>
                    </div>
                    <div className="confirmation__instructions">
                        {instructions.map((item, i) => (
                            <Instruction key={i} props={item} />
                        ))}
                    </div>
                    <div className="confirmation__text">
                        <span className="confirmation__text-user">
                            {userName + "!"}
                        </span>
                        <span>
                            Ваш заказ успешно оформлен. 
                        </span>
                        <span>
                            В ближайшее время с вами свяжется наш оператор для подтверждения. 
                        </span>
                        <span className="confirmation__text-bold">
                            Благодарим Вас за оказанное доверие и желаем приятного путешествия! 
                        </span>
                    </div>
                    <div className="confirmation__footer">
                        <div className="confirmation__footer-rate">
                            <span>
                                Оценить сервис
                            </span>
                            <div className="confirmation__footer-rate_stars">
                                {stars.map((item) => (
                                    <div key={item.index} className={(item.status === "active") ? "confirmation__footer-rate_star-active" : ""}>
                                        <Star />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button props={button} />
                    </div>
                </div>
            </div>
        </div>
    )
}