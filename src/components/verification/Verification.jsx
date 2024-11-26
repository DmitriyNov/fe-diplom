import Details from "../order/Details";
import Train from "../tickets/Train";
import VerificationPassenger from "./VerificationPassenger";
import Button from "../ui/Button";
import { Ruble } from "../icons/Icons";
import { order } from "../../api/appAPI";
import { useOutletContext } from "react-router-dom";

export default function Verification () {

    const [routesList, selectedRoute, trainSeats, tickets, setTickets, passengers, setPassengers, user, setUser, selectPlaces, backToTrains, selectPassengers, selectPayment, selectVerification, confirmOrder, setOrderData] = useOutletContext();

    let trainData = {};
    routesList.items.map((route) => {
        selectedRoute.map((train) => {
            if (route.arrival) {
                if (train._id === route.arrival._id) {
                    trainData = route;
                }
            } else if (route.departure) {
                if (train._id === route.departure._id) {
                    trainData = route;
                }
            }
        })
    });

    const orderData = {
        user: user,
    }

    selectedRoute.map((item) => {
        const seats = [];
        const currentRoute = {
            route_direction_id: item._id,
        }
        if (item.type === "there") {
            passengers.map((passenger) => {
                let currentSeat = {};
                tickets.map((ticket) => {
                    if (ticket.direction === "there" && ticket.id === passenger.id) {
                        currentSeat = {
                            coach_id: ticket.carriageId,
                            person_info: passenger,
                            seat_number: ticket.seats,
                            is_child: (ticket.type === "child") ? true : false,
                            include_children_seat: false, // Пока не придумал, как вообще добавлять места для мелких
                        }
                    }
                });
                if (Object.keys(currentSeat).length !== 0) {
                    seats.push(currentSeat);
                }
            });
            if (seats.length !== 0) {
                const departure = {route_direction_id: item._id, seats};
                orderData.departure = departure;
            }
        } else if (item.type === "back") {
            passengers.map((passenger) => {
                let currentSeat = {};
                tickets.map((ticket) => {
                    if (ticket.direction === "back" && ticket.id === passenger.id) {
                        currentSeat = {
                            coach_id: ticket.carriageId,
                            person_info: passenger,
                            seat_number: ticket.seats,
                            is_child: (ticket.type === "child") ? true : false,
                            include_children_seat: false, // Пока не придумал, как вообще добавлять места для мелких
                        }
                    }
                });
                if (Object.keys(currentSeat).length !== 0) {
                    seats.push(currentSeat);
                }
            });
            if (seats.length !== 0) {
                const arrival = {route_direction_id: item._id, seats};
                orderData.arrival = arrival;
            }
        }
    });

    const paymentType = (user.payment_method === "online") ? "Онлайн" : "Наличными"
    const price = tickets.reduce((acc, item) => {
        return acc + item.price
    }, 0);

    const button = {
        size: "button-large",
        decor: "button-orange_white",
        text: "Подтвердить",
        onClick: () => {
            order(orderData, (response) => {
                if (response.status) {
                    setOrderData(
                        {
                            price: tickets.reduce((acc, item) => acc + item.price, 0),
                            user: user,
                        }
                    );
                    confirmOrder();
                } else {
                    console.log("заказ не совершён");
                    console.log(response);
                }
            })
        },
    };

    const buttonChangeTrain = {
        size: "button-small",
        decor: "button-simple_black",
        text: "Изменить",
        onClick: () => {
            backToTrains();
        },
    };

    const buttonChangePassengers = {
        size: "button-small",
        decor: "button-simple_black",
        text: "Изменить",
        onClick: () => {
            selectPassengers();
        },
    };

    const buttonChangePayment = {
        size: "button-small",
        decor: "button-simple_black",
        text: "Изменить",
        onClick: () => {
            selectPayment();
        },
    };

    return (
        <div className="verification">
            <div className="verification__aside_widget-container">
                <Details props={{ selectedRoute: selectedRoute, tickets: tickets}} />
            </div>
            <div className="verification__content-container">
                <div className="verification__train-container">
                    <div className="verification__train-title">
                        Поезд
                    </div>
                    <div className="verification__train-content">
                        <Train trainData={trainData} selectPlaces={selectPlaces} change={buttonChangeTrain}/>
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
                            <Button props={buttonChangePassengers} />
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
                        <Button props={buttonChangePayment} />
                    </div>
                </div>
                <div className="verification-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}