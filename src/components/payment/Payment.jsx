import Details from "../order/Details";
import Button from "../ui/Button";
import { Unchecked, Checked } from "../icons/Icons";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Payment () {
    
    const [selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification] = useOutletContext();

    const [user, setUser ] = useState({
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "",
        email: "",
        payment_method: "",
    });

    const [currentPaymentMethod, setCurrentPaymentMethod] = useState("");

    const button = {
        size: "button-large",
        decor: "button-orange_white",
        text: "КУПИТЬ БИЛЕТЫ",
        onClick: () => {
            selectVerification();
        },
    };

    function setCheckbox (event) {
        if (event.currentTarget.id === "online" && currentPaymentMethod !== "online") {
            setUser({...user, payment_method: "online"});
            setCurrentPaymentMethod("online");
        } else if (event.currentTarget.id === "online" && currentPaymentMethod === "online") {
            setUser({...user, payment_method: ""});
            setCurrentPaymentMethod("");
        } else if (event.currentTarget.id === "cash" && currentPaymentMethod !== "cash") {
            setUser({...user, payment_method: "cash"});
            setCurrentPaymentMethod("cash");
        } else if (event.currentTarget.id === "cash" && currentPaymentMethod === "cash") {
            setUser({...user, payment_method: ""});
            setCurrentPaymentMethod("");
        } else {
            setUser({...user, payment_method: ""})
        }
    }

    return (
        <div className="payment">
            <div className="payment__aside_widget-container">
                <Details />
            </div>
            <div className="payment__content-container">
                <div className="payment-container">
                    <div className="payment__title-container">
                        <span className="payment__title">
                            Персональные данные
                        </span>
                    </div>
                    <div className="payment__info">
                        <form className="payment__info_form">
                            <div>
                                <label className="payment__info-label">
                                    Фамилия
                                    <input className="payment__info-input" type="text" />
                                </label>
                                <label className="payment__info-label">
                                    Имя
                                    <input className="payment__info-input" type="text" />
                                </label>
                                <label className="payment__info-label">
                                    Отчество
                                    <input className="payment__info-input" type="text" />
                                </label>
                            </div>
                            <div>
                                <label className="payment__info-label">
                                    Контактный телефон
                                    <input className="payment__info-input" type="text" />
                                </label>
                            </div>
                            <div>
                                <label className="payment__info-label">
                                    E-mail
                                    <input className="payment__info-input" type="text" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="payment__title-container">
                        <span className="payment__title">
                            Способ оплаты
                        </span>
                    </div>
                    <div className="payment__info">
                        <form className="payment__info_form payment__info_form-payment">
                            <div>
                                <div className="passenger__info-checkbox">
                                    <input className="passenger__info-input_checkbox" type="checkbox" />
                                    <div id="online" onClick={setCheckbox}>
                                        {(user.payment_method === "online") ? <Checked /> : <Unchecked />}
                                    </div>
                                    <span className={(user.payment_method === "online") ? "passenger__info-input_checkbox_text" : ""}>
                                        Онлайн
                                    </span>
                                </div>
                                <div className="passenger__info-checkbox_options">
                                    <span>
                                        Банковской<br/>картой
                                    </span>
                                    <span>
                                        PayPal
                                    </span>
                                    <span>
                                        Visa QIWI Wallet
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="passenger__info-checkbox">
                                    <input className="passenger__info-input_checkbox" type="checkbox"/>
                                    <div id="cash" onClick={setCheckbox}>
                                        {(user.payment_method === "cash") ? <Checked /> : <Unchecked />}
                                    </div>
                                    <span className={(user.payment_method === "cash") ? "passenger__info-input_checkbox_text" : ""}>
                                        Наличными
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="payment-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}