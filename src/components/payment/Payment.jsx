import Details from "../order/Details";
import PaymentInput from "./PaymentInput";
import Button from "../ui/Button";
import { Unchecked, Checked, Invalid, Valid } from "../icons/Icons";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Payment () {
    
    const [routesList, selectedRoute, trainSeats, tickets, setTickets, passengers, setPassengers, user, setUser, selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification] = useOutletContext();

    const [button, setButton] = useState({});
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState("");
    const [status, setStatus] = useState(null);
    const [faultText, setFaultText] = useState("");

    useEffect(() => {
        setButton({
            size: "button-large",
            decor: "button-unactive",
            text: "КУПИТЬ БИЛЕТЫ",
            onClick: () => {
                validateForm();
            },
        });
    }, []);

    function selectValue (event) {
        const value = event.currentTarget.value;
        for (let key in user) {
            if (key === event.currentTarget.id) {
                user[key] = value;
            }
        };
        setUser({...user});
        console.log(user);
    };

    function validateInput (event) {
        const value = event.currentTarget.value;
        if (value.length === 0) {
            selectValue(event);
        }
        if (event.currentTarget.id === "phone") {
            const currentvalue = value.split("-").reduce((acc, item) => acc + item, "");
            const filter = new RegExp("^[0-9]{11}$");
            if (!filter.test(currentvalue)) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректный номер телефона.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else if (event.currentTarget.id === "email") {
            const filter = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            if (!filter.test(value)) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректный E-mail.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else {
            if (value.length > 1) {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        }
    }

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

    function validateForm () {
        setFaultText("");
        if (!user.first_name || !user.last_name || !user.patronymic || !user.phone || !user.email) {
            setStatus("invalid");
            setFaultText(`Пожалуйста, введите ${(!user.last_name ? "фамилию." : !user.first_name ? "имя." : !user.patronymic ? "отчество." : !user.phone ? "номер телефона." : "E-mail.")}`);
            return false;
        } else if (!user.payment_method) {
            setStatus("invalid");
            setFaultText("Пожалуйста, выберите способ оплаты.");
            return false;
        } else {
            return true;
        }
    }

    function checkFormCorrect () {
        let error = true;
        for (let key in user) {
            if (user[key] === "") {
                error = false;
            }
        }
        return error;
    }

    useEffect(() => {
        const checked = checkFormCorrect();
        if (checked) {
            setButton({
                size: "button-large",
                decor: "button-orange_white",
                text: "КУПИТЬ БИЛЕТЫ",
                onClick: () => {
                    selectVerification();
                },
            });
        } else {
            setButton({
                size: "button-large",
                decor: "button-unactive",
                text: "КУПИТЬ БИЛЕТЫ",
                onClick: () => {
                    validateForm();
                },
            });
        }
    }, [user]);

    return (
        <div className="payment">
            <div className="payment__aside_widget-container">
                <Details props={{ selectedRoute: selectedRoute, tickets: tickets}} />
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
                                    <PaymentInput id="last_name" placeholder="" lastValue={user.last_name} onBlur={validateInput}/>
                                </label>
                                <label className="payment__info-label">
                                    Имя
                                    <PaymentInput id="first_name" placeholder="" lastValue={user.last_name} onBlur={validateInput}/>
                                </label>
                                <label className="payment__info-label">
                                    Отчество
                                    <PaymentInput id="patronymic" placeholder="" lastValue={user.last_name} onBlur={validateInput}/>
                                </label>
                            </div>
                            <div>
                                <label className="payment__info-label">
                                    Контактный телефон
                                    <PaymentInput id="phone" placeholder="8-_ _ _-_ _ _-_ _-_ _" lastValue={user.last_name} onBlur={validateInput}/>
                                </label>
                            </div>
                            <div>
                                <label className="payment__info-label">
                                    E-mail
                                    <PaymentInput id="email" placeholder="" lastValue={user.last_name} onBlur={validateInput}/>
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
                                <div className="payment__info-checkbox">
                                    <input className="payment__info-input_checkbox" type="checkbox" />
                                    <div id="online" onClick={setCheckbox}>
                                        {(user.payment_method === "online") ? <Checked /> : <Unchecked />}
                                    </div>
                                    <span className={(user.payment_method === "online") ? "payment__info-input_checkbox_text" : ""}>
                                        Онлайн
                                    </span>
                                </div>
                                <div className="payment__info-checkbox_options">
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
                                <div className="payment__info-checkbox">
                                    <input className="payment__info-input_checkbox" type="checkbox"/>
                                    <div id="cash" onClick={setCheckbox}>
                                        {(user.payment_method === "cash") ? <Checked /> : <Unchecked />}
                                    </div>
                                    <span className={(user.payment_method === "cash") ? "payment__info-input_checkbox_text" : ""}>
                                        Наличными
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {((status === "valid") ? 
                    <div className={"payment__info_footer " + ((status === "valid") ? "payment__info_footer-valid" : (status === "invalid") ? "payment__info_footer-invalid" : "")} >
                        <div className="payment__info_footer-wraper">
                            <Valid />
                            Готово
                        </div>
                    </div>
                : (status === "invalid") ? 
                    <div className={"payment__info_footer " + ((status === "valid") ? "payment__info_footer-valid" : (status === "invalid") ? "payment__info_footer-invalid" : "")} > 
                        <div className="payment__info_footer-wraper">
                            <Invalid />
                            {faultText}
                        </div>
                    </div> 
                : "")}
                <div className="payment-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}