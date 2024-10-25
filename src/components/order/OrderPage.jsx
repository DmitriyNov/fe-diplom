import StepsScreen from "./StepsScreen";
import Order from "./Order";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


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

    const navigation = useNavigate();

    useEffect(() => {
        navigation("/order/tickets/train");
        //setStepHandle(1);
    }, []);

    function selectPlaces () {
        navigation("/order/tickets/places");
        //setStepHandle(1);
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

    return (
        <div className="order_page">
            <StepsScreen steps={steps}/>
            <Order selectPlaces={selectPlaces} backToTrains={backToTrains} selectPassengers={selectPassengers} selectPayment={selectPayment} selectVerification={selectVerification}/>
        </div>
    )
}