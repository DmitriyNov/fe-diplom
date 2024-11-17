import StepsScreen from "./StepsScreen";
import Order from "./Order";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRoutes, getSeats } from "../../api/appAPI";


export default function OrderPage () {

    const [steps, setSteps] = useState([
        {
            number: 1,
            text: "Билеты",
            status: "step-active",
            decore: "first-step",
        },
        {
            number: 2,
            text: "Пассажиры",
            status: "",
            decore: true,
        },
        {
            number: 3,
            text: "Оплата",
            status: "",
            decore: true,
        },
        {
            number: 4,
            text: "Проверка",
            status: "",
            decore: "finish-step",
        },
    ]);

    // function setStepHandle (step) {
    //     const currentSteps = steps.map((item, i) => {
    //         if (i <= step) {
    //             item.status = "step-active";
    //         } else {
    //             item.status = "";
    //         }
    //     });
    //     setSteps(currentSteps);
    // };

    const [routesList, setRoutesList] = useState({});
    const [selectedRoute, setSelectedRoute] = useState({});
    const [trainSeats, setTrainSeats] = useState([]);
    const [tickets, setTickets] = useState([]);

    const navigation = useNavigate();

    function startSearch (idFrom, idTo, dateFrom, dateTo) {
        const options = {from_city_id: idFrom, to_city_id: idTo, date_start: dateFrom, date_end: dateTo};
        getRoutes(options, (response) => {
            setRoutesList(response);
        });
    }

    function selectSeats (id) {
        const options = {};
        let currentSeats = [];

        id.map((item) => {
            getSeats(item, options, (response) => {
                if (Array.isArray(response)) {
                    currentSeats.push(response);
                    navigation("/order/tickets/places"); // Мне пару раз прихдил пустой ответ, поэтоу прехожу далее только после проверки ответа от сервера
                    //setStepHandle(1);
                } else {
                    console.log(response);
                }
            });
        });
        setTrainSeats(currentSeats);
    }

    useEffect(() => {
        navigation("/order/tickets/train");
        //setStepHandle(1);
    }, []);

    function selectPlaces (id, trainData) {
        setSelectedRoute(trainData);
        selectSeats(id);
        setTickets([]);
    }

    function backToTrains () {
        navigation("/order/tickets/train");
        //setStepHandle(1);
    }

    function selectPassengers () {
        navigation("/order/passengers");
        //setStepHandle(2);
    }

    function selectPayment () {
        navigation("/order/payment");
        //setStepHandle(3);
    }

    function selectVerification () {
        navigation("/order/verification");
        //setStepHandle(4);
    }

    function confirmOrder () {
        navigation("/confirmation");
    };
    
    return (
        <div className="order_page">
            <StepsScreen steps={steps} startSearch={startSearch} />
            <Order routesList={routesList} selectedRoute={selectedRoute} trainSeats={trainSeats} tickets ={tickets} setTickets={setTickets} selectPlaces={selectPlaces} backToTrains={backToTrains} selectPassengers={selectPassengers} selectPayment={selectPayment} selectVerification={selectVerification} confirmOrder={confirmOrder} />
        </div>
    )
}